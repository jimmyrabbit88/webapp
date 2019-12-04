var request = require('request');
var apiOptions = { server : "http://localhost:3000" };
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = "https://boiling-castle-33038.herokuapp.com";
}
/* GET home page */
//method for calling the api request and returning an object which is used to render page 
const meals = function(req, res){ 
    console.log(req.query);

    var requestOptions, path;
    path = '/api/meals';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {
        },
        //optional paramaters to query
        qs : {
        }
    }
    request(
        requestOptions,
        function(err, response, body) {
            _renderMeals(req, res, body);
            
        }
    )
        
     
};

const addLike = function(req, res){
    var requestOptions, path;
    console.log(req);
    path = '/api/meals/' + req.params.mealId;
    requestOptions = {
        url : apiOptions.server + path,
        method : "PUT",
        json : {},
        //optional paramaters to query
        qs : {
        }
    }
    request(
        requestOptions,
        function(err, response, body) {
            res.redirect('/meals/?usr='+ req.query.usr)
        }
    )
}

const addToList = function(req, res){
    console.log('AAA')
    var requestOptions, path;

    path = '/api/shopping/'
    requestOptions = {
        url : apiOptions.server + path,
        method : "PUT",
        json : {
            title : req.params.mealTitle
        },
        //optional paramaters to query
        qs : {
        }
    }
    request(
        requestOptions,
        function(err, response, body) {
            res.redirect('/meals')
        }
    )
}

const _renderMeals = function(req, res, content){
    let message = null;
    if(!content.length){
        message = "No Meals Found"
    }
    res.render('meals', {
        title : req.query.usr,
        meals : content,
        message : message
    })
}

const shopping = function(req, res){ 
    var requestOptions, path;
    path = '/api/getItems';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {},
        //optional paramaters to query
        qs : {
        }
    }
    request(
        requestOptions,
        function(err, response, body) {
            _renderShop(req, res, body);
            
        }
    )
};

const _renderShop = function(req, res, content){
    let message = null;
    if(!content.length){
        message = "No Meals Found"
    }
    console.log(content);
    res.render('shopping', {
        list : content,
        message : message
    })
}

    module.exports = { meals, shopping, addLike, addToList };
    
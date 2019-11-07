var request = require('request');
var apiOptions = { server : "http://localhost:3000" };
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = "https://boiling-castle-33038.herokuapp.com";
}
/* GET home page */
//method for calling the api request and returning an object which is used to render page 
const meals = function(req, res){ 
    var requestOptions, path;
    path = '/api/meals';
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
            _renderMeals(req, res, body);
        }
    )
        
     
};

const addLike = function(req, res){
    var requestOptions, path;
    console.log(req.params);
    path = '/api/meals/daadsasggfg';
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
            _renderMeals(req, res, body);
        }
    )
}

const _renderMeals = function(req, res, content){
    let message = null;
    if(!content.length){
        message = "No Meals Found"
    }
    res.render('meals', {
        meals : content,
        message : message
    })
}

const shopping = function(req, res){ 
    res.render('shopping', { 
        title: 'Shopping'
    }); 
};

    module.exports = { meals, shopping, addLike };
    
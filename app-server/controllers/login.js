const main = require('../controllers/main');
var request = require('request');
var apiOptions = { server : "http://localhost:3000" };
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = "https://boiling-castle-33038.herokuapp.com";
}


const register = function(req, res){ 
    res.render('register', { title: 'Register' }); 
};

//Link to call the api method to Register a new user, also calls the init mealList and init shopList methods
const addUser = function(req, res){ 
    var requestOptions, path;
        path = '/api/register';
        requestOptions = {
            url : apiOptions.server + path,
            method : "POST",
            json : {
                name : req.body.name,
                email : req.body.email,
                username : req.body.username,
                password : req.body.password
            }
        }
        request(
            requestOptions,
            function(err, response, body) {
                if(response.statusCode == 200){
                    //_initaliseMealList(req, res);
                    _initaliseShoppingList(req, res);
                    res.redirect('meals/?usr='+req.body.username);
                    
                }
                else{
                    console.log('user failed to add');
                    register(req, res);
                }
            }
        )
};
//

const _initaliseMealList = function(req, res){
    var requestOptions, path;
    path = '/api/initMealList';
    requestOptions = {
        url : apiOptions.server + path,
        method : "POST",
        json : {
            username : req.body.username
        }
    }
    request(
        requestOptions,
        function(err, response, body){
            if(err){
                console.log('problem initaliseing the list')
            }
        }
    )
}

// Init the shopping list
const _initaliseShoppingList = function(req, res){
    console.log('AAAA')
    var requestOptions, path;
    path = '/api/initShopList';
    requestOptions = {
        url : apiOptions.server + path,
        method : "POST",
        json : {
            username : req.body.username
        }
    }
    request(
        requestOptions,
        function(err, response, body){
            console.log('CCCC')
            if(err){
                console.log('problem initaliseing the list')
            }
        }
    )
}

const login = function(req, res){
    console.log('AAA');
    var requestOptions, path;
        path = '/api/login';
        requestOptions = {
            url : apiOptions.server + path,
            method : "POST",
            json : {},
            qs : {
                username : req.body.username,
                password : req.body.password
            }
        }
        request(
            requestOptions,
            function(err,response,body){
                if(response.statusCode == 200){
                    
                    //$localStorage.setItem(userId, body._id)
                    res.redirect('/meals');
                }
                else{
                    console.log('EEE');
                    res.redirect('/');
                
                }
            
            }
        )
}



const index = function(req, res){ 
    res.render('index', { title: 'login' }); 
};



var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};

const addLike = function(){
    console.log('addLike');
}

    module.exports = { register, addUser, index, login };
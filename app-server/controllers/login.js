const main = require('../controllers/main');
var request = require('request');
var apiOptions = { server : "http://localhost:3000" };
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = "https://boiling-castle-33038.herokuapp.com";
}


const register = function(req, res){ 
    res.render('register', { title: 'Register' }); 
};

//
const addit = function(req, res){ 
    var requestOptions, path;
        path = '/api/users';
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
                    console.log('user added');
                    main.meals(req, res);
                    
                }
                else{
                    console.log('user failed to add');
                    register(req, res);
                }
            }
        )
};
//

const login = function(req, res){
    console.log(req.body.username);
    var requestOptions, path;
        path = '/api/users';
        requestOptions = {
            url : apiOptions.server + path,
            method : "GET",
            json : {},
            qs : {
                username : req.body.username
            }
        }
        request(
            requestOptions,
            function(err,response,body){
                if(response.statusCode == 200){
                    main.meals(req, res);
                }
                else if (response.statusCode == 203){
                    console.log('register');
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

    module.exports = { register, addit, index, login };
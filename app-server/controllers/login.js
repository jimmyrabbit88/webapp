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

// check if a username is already in use return true if username is in use
const checkUsername = function(username){
    //return false;
    var requestOptions, path;
    var check = true;
    path = '/api/users'
    requestOptions = {
        url : apiOptions.server + path,
        method: "GET",
        json: {},
        qs : {
            username : username
        }
    }
    
    
     request(
         requestOptions,
         function(err, response, body){
             // Status code 203 = no match for this username
            if (response.statusCode == 203){
                console.log('a');
                let check = false;
                
            }
            else{
                console.log('b');
                //let check = true;
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

    module.exports = { register, addit, index };
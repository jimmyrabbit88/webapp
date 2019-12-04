var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('user');

module.exports.register = function(req, res){
    //sendJsonResponse(res, 400, { "message": "all fields required" });
    //console.log("in");
    if(!req.body.name || !req.body.email || !req.body.username || !req.body.password) {
        sendJsonResponse(res, 400, {
            "message": "all fields required"
            
        });
        //console.log("a");
        return;
    }
    //console.log(2);

    var user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.username = req.body.username;
    user.setPassword(req.body.password);

    user.save(function(err){
        var token;
        if(err){
            //console.log("b");
            sendJsonResponse(res, 404, err);
            
        }
        else{
            token = user.generateJwt();
            //console.log("c");
            sendJsonResponse(res, 200, {
                "token": token
            });
        }
    });
}

module.exports.login = function(req, res){
    console.log('BBB');
    //console.log(req.query);
    if(!req.query.username || !req.query.password){
        sendJsonResponse(res, 400, { "message": "All fields required"});
        return;
    }

    passport.authenticate('local', function(err, user, info){
        var token;

        if(err){
            sendJsonResponse(res, 402, err);
            return;
        }
        if(user){
            console.log('CCC');
            token = user.generateJwt();
            sendJsonResponse(res, 200, { "token": token });
        }
        else{
            sendJsonResponse(res, 401, info);
        }
    }) (req, res);
}

var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
}
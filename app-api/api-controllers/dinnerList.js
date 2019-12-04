const mongoose = require('mongoose');
const dinners = mongoose.model('dinners');

//add a new dinnerList


// add a meal to the dinners list
module.exports.addMeal = function(req, res){
    if(req.params && req.params.username){
        let username = req.params.username;
        console.log(id);
        dinners
            .find({'username' : username}, null)
            .exec(function(err, foundDinners){
                console.log('BB')
                //sendJsonResponse(res, 300, foundDinners);
                if(!foundMeal){
                    sendJsonResponse(res, 404, {"message" : "no match for this MealId"});
                    return;
                }
                // else if(err){
                //     sendJsonResponse(res, 404, err);
                //     return;
                // }
                //Update here
                else {
                    doAddMeal(req,res,foundDinners)
                }
            });
    }
    else{
        sendJsonResponse(res, 404, {"message" : "No MealId in request"});
    }
}

var doAddMeal = function(req, res, foundDinners){
    
}

module.exports.initMealList = function(req, res){
    dinners.create({
        username : req.body.username
    },
    function(err, list) {
        if (err) {
            sendJsonResponse(res, 400, err);
        }
        else {
            sendJsonResponse(res, 201, list);
        }
    });
}


var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};
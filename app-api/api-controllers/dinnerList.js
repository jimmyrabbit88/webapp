const mongoose = require('mongoose');
const dinners = mongoose.model('dinners');

//add a new dinnerList
module.exports.new = function(req, res){
    dinners.create({
        userId : req.params.userId,
    }, 
    function(err, meal) {
        if (err) {
            sendJsonResponse(res, 400, err);
        }
        else {
            sendJsonResponse(res, 201, meal);
        }
    });
}

// add a meal to the dinners list
module.exports.addMeal = function(req, res){
    if(req.params && req.params.userId){
        let id = req.params.userId;
        console.log(id);
        dinners
            .find({'userId' : id}, null)
            .exec(function(err, foundDinners){
                //console.log(foundDinners)
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


var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};
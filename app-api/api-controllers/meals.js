const mongoose = require('mongoose');
const meal = mongoose.model('meal');


module.exports.mealList = function(req, res){
    meal
        .find({like: { $gte : 40 }}, null, { limit : 20})
        .exec(function(err, docs){
            sendJsonResponse(res, 200, docs);
        })
};

module.exports.oneMeal = function(req, res){
    if(req.params && req.params.mealId){
        let id = req.params.mealId;
        meal
            .findById(id)
            .exec(function(err, foundMeal){
                if(!foundMeal){
                    sendJsonResponse(res, 404, {"message" : "no match for this MealId"});
                    return;
                }
                else if(err){
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, foundMeal)
            });
    }
    else{
        sendJsonResponse(res, 404, {"message" : "No MealId in request"});
    }
    
};

module.exports.newMeal = function(req, res){
    sendJsonResponse(res, 200, {"message" : "works"});
}

module.exports.removeMeal = function(req, res){
    sendJsonResponse(res, 200, {"message" : "works"});
};

module.exports.oneMealIngList = function(req, res){
    sendJsonResponse(res, 200, {"message" : "works"});
}

module.exports.like = function(req, res){
    sendJsonResponse(res, 200, {"message" : "works"});
}


var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};

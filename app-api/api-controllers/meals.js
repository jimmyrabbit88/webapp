const mongoose = require('mongoose');
const meal = mongoose.model('meal');

//Return a list of all meals in the DB with a limit of 20
module.exports.mealList = function(req, res){
    //-sendJsonResponse(res, 404, req.query.limit);
    if(req.params){
        //const listAmount = req.query.limit ? parseInt(req.query.limit) : 10
        meal
            .find({}, null, {limit : parseInt(req.query.limit)})
            .exec(function(err, foundMeals){
                if(!foundMeals){
                    sendJsonResponse(res, 404, {"message" : "no match for this request"});
                    return
                }
                else if(err){
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, foundMeals)
            });
    }
    else{
        sendJsonResponse(res, 404, {"message" : "No request"});
    }
};

// return a meal matching the given location ID
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

// add a new meal to the database
module.exports.newMeal = function(req, res){
    //sendJsonResponse(res, 200, req.body.title);
    meal.create({
        imagePath : req.body.img,
        title : req.body.title,
        text : req.body.text,
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
// Remove a meal from the database
module.exports.removeMeal = function(req, res){
    //sendJsonResponse(res, 200, {"mealId" : req.params.mealId});
    var mealId = req.params.mealId;
    if (mealId) {
        meal
            .findByIdAndRemove(mealId)
            .exec(function(err, meal) {
                if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 204, {"ass" : "hole"});
            });
    } 
    else {
        sendJsonResponse(res, 404, {"message": "No locationid"});
    }
};

// Return a list of all ingredients for one meal
module.exports.oneMealIngList = function(req, res){
    //sendJsonResponse(res, 200, {"message" : "works"});
    if(req.params && req.params.mealId){
        let id = req.params.mealId;
        meal
            .findById(id, 'ings', function(err, foundMeal){
                if(!foundMeal){
                    sendJsonResponse(res, 404, {"message" : "no match for this MealId"});
                    return;
                }
                else if(err){
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, foundMeal.ings)
            });
    }
    else{
        sendJsonResponse(res, 404, {"messagess" : "No MealId in request"});
    }
}

// Add a like to a meal
module.exports.like = function(req, res){
    sendJsonResponse(res, 200, {"message" : "works"});
}


var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};

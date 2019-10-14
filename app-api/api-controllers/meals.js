const mongoose = require('mongoose');
const meal = mongoose.model('meal');

//Return a list of all meals in the DB with a limit of 20
module.exports.mealList = function(req, res){
    if(req.params){
        meal
            .find({}, null, {limit : req.query.limit ? parseInt(req.query.limit) : 20})
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

// return a meal matching the given meal ID
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
    var mealId = req.params.mealId;
    if (mealId) {
        meal
            .findByIdAndRemove(mealId)
            .exec(function(err, meal) {
                if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 204, meal);
            });
    } 
    else {
        sendJsonResponse(res, 404, {"message": "No locationid"});
    }
};

// Return a list of all ingredients for one meal
module.exports.oneMealIngList = function(req, res){
    if(req.params && req.params.mealId){
        let id = req.params.mealId;
        meal
            .findById(id, 'ingredients', function(err, foundMeal){
                if(!foundMeal){
                    sendJsonResponse(res, 404, {"message" : "no match for this MealId"});
                    return;
                }
                else if(err){
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 201, foundMeal)
            });
    }
    else{
        sendJsonResponse(res, 404, {"messages" : "No MealId in request"});
    }
}

// Add a like to a meal
module.exports.like = function(req, res){
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
                //Update here
                foundMeal.like = foundMeal.like + 1;
                foundMeal.save(function(err, worked){
                    if(err){
                        sendJsonResponse(res, 404, err);
                    }
                    sendJsonResponse(res, 200, worked)
                })
            });
    }
    else{
        sendJsonResponse(res, 404, {"message" : "No MealId in request"});
    }
}


var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};

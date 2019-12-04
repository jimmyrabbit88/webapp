const mongoose = require('mongoose');
const shopping = mongoose.model('shopping');

//add a new dinnerList
module.exports.getItems = function(req, res){
    shopping.find({'username' : 'ff'}, 'list', function(err, foundShoppingList){
        if(!foundShoppingList){
            sendJsonResponse(res, 404, {"message" : "no match for this user"});
            return;
        }
        else if(err){
            sendJsonResponse(res, 404, err);
            return;
        }
        sendJsonResponse(res, 201, foundShoppingList)
    });
}

//add a meal to the dinners list
module.exports.addMeal = function(req, res){
    console.log('GGGGG')
    if(req.body.title){
        let title = req.body.title;
        shopping
            .find({'username' : 'ff'}, null)
            .exec(function(err, foundMeal){
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
                    console.log(foundMeal);
                    doAddMeal(req, res, foundMeal[0])
                    // foundMeal.push('ajkdfflkasj')
                    // foundMeal.save(function(err, founds) {})
                    sendJsonResponse(res, 200, {'message' : 'hope is eternal'})
                }
            });
    }
    else{
        sendJsonResponse(res, 404, {"message" : "No MealId in request"});
    }
}

var doAddMeal = function(req, res, foundDinners){
    foundDinners.list.push(req.body.title);
    foundDinners.save(function(err, foundDinners) {
        //console.log('VVVV');
    });
    
}

module.exports.initShopList = function(req, res){
    //console.log('BBB');
    shopping.create({
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
const mongoose = require('mongoose');
const ing = mongoose.model('ingredient');


module.exports.ingList = function(req, res){
    ing
        .find()
        .exec(function(err, docs){
            sendJsonResponse(res, 200, docs);
        })
};

// Get one ingredient from the DB using its id
module.exports.oneIng = function(req, res){
    if(req.params && req.params.ingId){
        let id = req.params.ingId;
        ing
            .findById(id)
            .exec(function(err, foundIng){
                if(!foundIng){
                    sendJsonResponse(res, 404, {"message" : "no match for this Ingredient Id"});
                    return;
                }
                else if(err){
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, foundIng)
            });
    }
    else{
        sendJsonResponse(res, 404, {"message" : "No ingredient Id found in request url"});
    }
    
};

// Add a new Ingredient to the database
module.exports.newIng = function(req, res){
    ing.create({
        name : req.body.name,
        type : req.body.type,
    }, 
    function(err, ing) {
        if (err) {
            sendJsonResponse(res, 400, err);
        }
        else {
            sendJsonResponse(res, 201, ing);
        }
    });
}

// Remove an ingredient from the DB
module.exports.removeIng = function(req, res){
    var id = req.params.ingId;
    if (id) {
        ing
            .findByIdAndRemove(id)
            .exec(function(err, ing) {
                if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 204, ing);
            });
    } 
    else {
        sendJsonResponse(res, 404, {"message": "No ingredient id in the url"});
    }
};

var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};
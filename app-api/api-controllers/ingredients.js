const mongoose = require('mongoose');
const ing = mongoose.model('ingredient');


module.exports.ingList = function(req, res){
    ing
        .find()
        .exec(function(err, docs){
            sendJsonResponse(res, 200, docs);
        })
};

var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};
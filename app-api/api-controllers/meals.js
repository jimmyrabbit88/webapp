const mongoose = require('mongoose');
const meal = mongoose.model('meal');


module.exports.mealList = function(req, res){
    res.status(200);
    res.json({ "status" : "get meal" });
};

module.exports.oneMeal = function(req, res){
    console.log("aaaaaaaaaa");
    res.status(200);
    res.json({ "status" : "success" });
};
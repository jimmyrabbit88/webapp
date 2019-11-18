// const mongoose = require('mongoose');
// const user = mongoose.model('user');

//add a new user, this checkes if username is already in user
// module.exports.newUser = function(req, res){
//     user
//         .find({'username' : req.body.username}, null , {limit : 1})
//             .exec(function(err, foundUser){
//                 if(!foundUser.length){
//                     user.create({
//                         name : req.body.name,
//                         email : req.body.email,
//                         username : req.body.username,
//                         password : req.body.password,
//                     }, 
//                     function(err, user) {
//                         if (err) {
//                             sendJsonResponse(res, 409, err);
//                         }
//                         else {
//                             sendJsonResponse(res, 200, user);
//                         }
//                     });
//                 }
//                 else if(err){
//                     sendJsonResponse(res, 405, err);
//                     return;
//                 }
//                 else{
//                     sendJsonResponse(res, 701, {"details": "this username is already in use"});
//                 }
//             });
    
// }

// // find a user by Id
// module.exports.oneUser = function(req, res){
//     if(req.params && req.params.userId){
//         let id = req.params.userId;
//         user
//             .findById(id)
//             .exec(function(err, foundUser){
//                 if(!foundUser){
//                     sendJsonResponse(res, 406, {"message" : "no match for this user Id"});
//                     return;
//                 }
//                 else if(err){
//                     sendJsonResponse(res, 407, err);
//                     return;
//                 }
//                 sendJsonResponse(res, 200, foundUser)
//             });
//     }
//     else{
//         sendJsonResponse(res, 408, {"message" : "No userId in request url"});
//     }
    
// };


// //search username
// module.exports.searchUsername = function(req, res){
//     console.log(req.query.username);
//     if(req.params){
//         user
//             .find({'username' : req.query.username}, null , {limit : 1})
//             .exec(function(err, foundUser){
//                 if(!foundUser.length){
//                     sendJsonResponse(res, 203, {"message" : "no match for this request"});
//                     return
//                 }
//                 else if(err){
//                     sendJsonResponse(res, 405, err);
//                     return;
//                 }
//                 sendJsonResponse(res, 200, foundUser)
//             });
//     }
//     else{
//         sendJsonResponse(res, 407, {"message" : "No request"});
//     }
// };




// var sendJsonResponse = function(res, status, content){
//     res.status(status);
//     res.json(content);
// };
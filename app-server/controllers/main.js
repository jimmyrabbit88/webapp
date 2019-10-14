var request = require('request');
var apiOptions = { server : "http://localhost:3000" };
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = "https://boiling-castle-33038.herokuapp.com";
}
/* GET home page */
//method for calling the api request and returning an object which is used to render page 
const meals = function(req, res){ 
    var requestOptions, path;
    path = '/api/meals';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {},
        //optional paramaters to query
        qs : {
            limit : 1
        }
    }
    request(
        requestOptions,
        function(err, response, body) {
            res.render('meals', {
                //title : JSON.stringify(body)
                meals : body
            });
        }
    ) 
};

const shopping = function(req, res){ 
    res.render('shopping', { 
        title: 'Shopping'
    }); 
};

    module.exports = { meals, shopping };
    
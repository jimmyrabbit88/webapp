var request = require('request');
var apiOptions = { server : "http://localhost:3000" };
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = "https://boiling-castle-33038.herokuapp.com";
}
/* GET home page */
const meals = function(req, res){ 
    var requestOptions, path;
    path = '/api/meals';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {},
    }
    request(
        requestOptions,
        function(err, response, body) {
            res.render('meals', {
                title: 'Meals',
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
    
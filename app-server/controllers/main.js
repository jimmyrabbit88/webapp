/* GET home page */
const index = function(req, res){ 
    res.render('index', { title: 'Home' }); 
};

const shopping = function(req, res){ 
    res.render('shopping', { title: 'Shopping' }); 
};

    module.exports = { index, shopping };
    
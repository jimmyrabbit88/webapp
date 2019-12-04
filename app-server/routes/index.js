const express = require('express');
const router = express.Router();
const ctrlLogin = require('../controllers/login');
const ctrlMain = require('../controllers/main');
 
/* GET home page. */
router.get('/meals', ctrlMain.meals);
router.get('/shopping', ctrlMain.shopping);

router
    .route('/meals/addLike/:mealId')
    .get(ctrlMain.addLike)

router.get('/meals/addToShopList/:mealTitle', ctrlMain.addToList)

router
    .route('/')
    .get(ctrlLogin.index)
    .post(ctrlLogin.login)
router
    .route('/register')
    .get(ctrlLogin.register)
    .post(ctrlLogin.addUser)





module.exports = router;


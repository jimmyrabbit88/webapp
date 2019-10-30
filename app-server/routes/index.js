const express = require('express');
const router = express.Router();
const ctrlLogin = require('../controllers/login');
const ctrlMain = require('../controllers/main');
 
/* GET home page. */
router.get('/meals', ctrlMain.meals);
router.get('/shopping', ctrlMain.shopping);

router.get('/', ctrlLogin.index);
router
    .route('/register')
    .get(ctrlLogin.register)
    .post(ctrlLogin.addit)





module.exports = router;


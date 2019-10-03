const express = require('express');
const router = express.Router();
const ctrlLogin = require('../controllers/login');
const ctrlMain = require('../controllers/main');
 
/* GET home page. */
router.get('/meals', ctrlMain.meals);
router.get('/shopping', ctrlMain.shopping);

router.get('/', ctrlLogin.index);
router.get('/register', ctrlLogin.register);





module.exports = router;


const express = require('express');
const router = express.Router();
const ctrlLogin = require('../controllers/login');
const ctrlMain = require('../controllers/main');
 
/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/shopping', ctrlMain.shopping);

router.get('/login', ctrlLogin.login);
router.get('/register', ctrlLogin.register);





module.exports = router;


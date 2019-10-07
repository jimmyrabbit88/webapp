const express = require('express');
const router = express.Router();
const ctrlMeals = require('../api-controllers/meals');
//const ctrlIng = require('../controllers/m');

//meals
router
    .route('/meals')
    .get(ctrlMeals.mealList);
router
    .route('/meals/:mealId')
    .get(ctrlMeals.oneMeal);

module.exports = router;
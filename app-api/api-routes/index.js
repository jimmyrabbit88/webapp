const express = require('express');
const router = express.Router();
const ctrlMeals = require('../api-controllers/meals');
//const ctrlIng = require('../controllers/m');

//meals functions

// get a list of meals limited to 20 based on likes
router
    .route('/meals')
    .get(ctrlMeals.mealList);

// get one meal from the meal Id
// post an new meal in the api
// delete a meal
router
    .route('/meals/:mealId')
    .get(ctrlMeals.oneMeal)
    .post(ctrlMeals.newMeal)
    .delete(ctrlMeals.removeMeal);

// get the list of ingredients from a meal given its id
router
    .route('/meals/:mealID/allIngredients')
    .get(ctrlMeals.oneMealIngList);
// put a like to a meal
router
    .route('/meals/:mealID/like')
    .put(ctrlMeals.like)


module.exports = router;
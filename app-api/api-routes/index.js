const express = require('express');
const router = express.Router();
const ctrlMeals = require('../api-controllers/meals');
const ctrlIng = require('../api-controllers/ingredients');

//meals functions

// get a list of meals limited to 20 based on likes

// post an new meal in the api
router
    .route('/meals')
    .get(ctrlMeals.mealList)
    .post(ctrlMeals.newMeal)

// get one meal from the meal Id
// delete a meal
router
    .route('/meals/:mealId')
    .get(ctrlMeals.oneMeal)
    .delete(ctrlMeals.removeMeal);

// get the list of ingredients from a meal given its id
router
    .route('/meals/:mealId/allIngredients')
    .get(ctrlMeals.oneMealIngList);
// put a like to a meal
router
    .route('/meals/:mealID/like')
    .put(ctrlMeals.like)

//INGREDIENTS
// get all ingredients
router  
    .route('/ingredients')
    .get(ctrlIng.ingList)

// get one ingredient by id

// post an new ingredient in the api

// delete an ingredient

// push an update to an ingredient




module.exports = router;
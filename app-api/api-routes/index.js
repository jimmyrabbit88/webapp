const express = require('express');
const router = express.Router();
const ctrlMeals = require('../api-controllers/meals');
const ctrlIng = require('../api-controllers/ingredients');
const ctrlUser = require('../api-controllers/users');

//meals functions

// get a list of meals limited to 20 based on likes

// post an new meal in the api
router
    .route('/meals')
    .get(ctrlMeals.mealList)
    .post(ctrlMeals.newMeal)

// get one meal from the meal Id
// delete a meal
// put a like to a meal
router
    .route('/meals/:mealId')
    .get(ctrlMeals.oneMeal)
    .delete(ctrlMeals.removeMeal)
    .put(ctrlMeals.like);

// get the list of ingredients from a meal given its id
router
    .route('/meals/:mealId/allIngredients')
    .get(ctrlMeals.oneMealIngList);

// search for a meal


//INGREDIENTS
// get all ingredients
// post an new ingredient in the api
router  
    .route('/ingredients')
    .get(ctrlIng.ingList)
    .post(ctrlIng.newIng)

// get one ingredient by id
// delete an ingredient
// put an update to an ingredient
router
    .route('/ingredients/:ingId')
    .get(ctrlIng.oneIng)
    .delete(ctrlIng.removeIng)

// put an update to an ingredient
// search for an ingredient


//DINNER LIST

// get all items on the list
// add a meal to the list
// remove a meal from the list
// search for a meal from the list

//SHOPPING LIST

// get all items on the list
// add an item to the list 
// update item on the list
// remove an item from the list

//USERS
// add a user
router
    .route('/users')
    .post(ctrlUser.newUser)
    .get(ctrlUser.searchUsername)
// get a user
// update a user
router
    .route('/user/:userId')
    .get(ctrlUser.oneUser)





module.exports = router;
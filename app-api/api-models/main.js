const mongoose = require('mongoose');

const ingSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    amount: Number,
    type: String
 });

const mealSchema = new mongoose.Schema({
    imagePath: String,
    title: {
        type: String,
        required: true
    },
    text: String,
    like: {type: Number, 'default': 0},
    ingredients: [ingSchema]
 });

 const dinnersSchema = new mongoose.Schema({
     list: [mealSchema]
 });

 const shoppingListSchema = new mongoose.Schema({
     list: [ingSchema]
 });

 mongoose.model('ingredient', ingSchema);
 mongoose.model('meal', mealSchema);
 mongoose.model('dinners', dinnersSchema);
 mongoose.model('shoppingList', shoppingListSchema);

 
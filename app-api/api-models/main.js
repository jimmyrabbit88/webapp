const mongoose = require('mongoose');

// Ingredient will have a name and type which is reference to it known measurement eg. cup, kg etc
const ingSchema = new mongoose.Schema({
    name: {
        type: String,
    },
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
    ingredients: [{
        amount: Number,
        ingredient: ingSchema
    }]
 });

 const dinnersSchema = new mongoose.Schema({
     list: [mealSchema]
 });

 const shoppingListSchema = new mongoose.Schema({
     list: [{
        amount: Number,
        ingredient: ingSchema
    }]
 });

 const userSchema = new mongoose.Schema({
     name: String,
     email: String,
     username: String,
     password: String
 })

 mongoose.model('ingredient', ingSchema);
 mongoose.model('meal', mealSchema);
 mongoose.model('dinners', dinnersSchema);
 mongoose.model('shoppingList', shoppingListSchema);
 mongoose.model('user', userSchema);

 
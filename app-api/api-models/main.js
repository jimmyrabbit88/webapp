const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

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
    username: String,
    list: [mealSchema]
 });

 const shoppingListSchema = new mongoose.Schema({
    username: String,
    list: [String]
 });

 const userSchema = new mongoose.Schema({
     name: String,
     email: String,
     username: String,
     hash: String,
     salt: String
    })

    userSchema.methods.setPassword = function(password){
        console.log(3);
        this.salt = crypto.randomBytes(16).toString('hex');
        this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
    }

    userSchema.methods.validPassword = function(password){
        var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
        return this.hash === hash
    }

    userSchema.methods.generateJwt = function(){
        var expiry = new Date();
        expiry.setDate(expiry.getDate() + 7);

        return jwt.sign({
            _id: this._id,
            email: this.email,
            username: this.username,
            exp: parseInt(expiry.getTime() / 1000)
        }, process.env.JWT_SECRET);
    }

 mongoose.model('ingredient', ingSchema);
 mongoose.model('meal', mealSchema);
 mongoose.model('dinners', dinnersSchema);
 mongoose.model('shopping', shoppingListSchema);
 mongoose.model('user', userSchema);

 
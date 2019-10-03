/* GET home page */
const meals = function(req, res){ 
    res.render('meals', {
        title: 'Meals'
        // meals: [{
        //     imagePath: '',
        //     title: 'Chicken',
        //     text: 'chicken and stuffing',
        //     like: 123,
        //     ingredients: 'chicken'
        // },
        // {
        //     imagePath: '',
        //     title: 'Pork',
        //     text: 'Pork stirloin',
        //     like: 99,
        //     ingredients: 'pork'
        // },
        // {
        //     imagePath: '',
        //     title: 'Veggie Lasagne',
        //     text: 'umm delish',
        //     like: 1503,
        //     ingredients: 'carrots'
        // }]

    }); 
};

const shopping = function(req, res){ 
    res.render('shopping', { 
        title: 'Shopping'
    //     ingredient: [{
    //         number: 2,
    //         name: 'beef',
    //         amountType: 'kg',
    //         price: 2.45
    //     },
    //     {
    //         number: 1,
    //         name: 'apples',
    //         amountType: '',
    //         price: .60
    //     },
    //     {
    //         number: 2,
    //         name: 'milk',
    //         amountType: 'cup',
    //         price: .99
    //     }
    // ]
    }); 
};

    module.exports = { meals, shopping };
    
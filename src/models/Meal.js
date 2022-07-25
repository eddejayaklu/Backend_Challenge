const mongoose = require('mongoose')
const validator = require('validator')

//Define schema of Meals
const mealSchema = new mongoose.Schema({
    category:{
        timeOfTheDay:{
            type: String,
            required : true
        }
    },
    name:{
        type: String,
        required: true,
        trim:true
    },
    foodItems: [String]
})

const Meal = mongoose.model('Meal',mealSchema)

module.exports=Meal
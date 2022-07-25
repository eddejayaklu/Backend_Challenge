const mongoose = require('mongoose')
const validator = require('validator')

//Define schema of User
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    calorieRequirement:{
        type : Number,
        required:true
    },
    mealPlan:[{
    Meal:{
        type:mongoose.Schema.Types.ObjectId,   //here user collection and meal has a realtionship
        required:true,
        ref:"Meal"
    }},
    {date:{
        type: Date,
        required: true
    }}
]
})

const User = mongoose.model('User',userSchema)

module.exports=User
const mongoose = require('mongoose')
const validator = require('validator')

//Define userSchema of foodItem
const foodSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        trim : true
    },
    calories : {
        type : Number,
        default : 0,               //If no calories are provided by default it will be zero. As calories cannot be negative        
        validate(value){           //if it's negative then it throws error
            if(value<0){
                throw new Error('calories cannot be negative')
            }
        }                
    },
    protein: {
        type : Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('proteins cannot be negative')
            }
        }
    },
    carbohdrate: {
        type : Number,
        default : 0,
        validate(value){
            if(value<0){
                throw new Error('carbohdrates cannot be negative')
            }
        }
    },
    Fat : {
        type: Number,
        default : 0,
        validate(value){
            if(value<0){
                throw new Error('water in gms cannot be negative')
            }
        }
    },
    acceptableUnits: { type: [String], 
        enum1: ["ml", "liter", "g", "kg", "item"]  //these are the only accepted units
    },
    itemWeight:{
        type: String,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('weight cannot be negative')
            }
        }

    }
})


const foodItem = mongoose.model('foodItem',foodSchema)

module.exports=foodItem


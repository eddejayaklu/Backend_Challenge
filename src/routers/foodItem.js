const express = require('express')
const Meal =require('../models/Meal')
const foodItem = require('../models/foodItem')
const User = require('../models/User')
const router = new express.Router()

//post api to create the fooditem using fooditem collection
router.post('/foodItem',async(req,res)=>{   
    const item = new foodItem(req.body)
    try{
        const foodItem = await item.save()
        res.send(foodItem)
    }catch(e){
        res.status(400).send(e)
    }
})


//to update the meals in the DB
router.patch('/foodMeals',async(req,res)=>{
    const Updates=Object.keys(req.body)
    const allowedUpdates = ['category','name','foodItems'] //User can update only the allowedUpdates fields
    const isValidOperation = Updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid Updates!'})  
    }
    try{

        Updates.forEach((update)=>req.Meal[update]=req.body[update])
        await req.Meal.save()
        
        res.status(200).send(req.Meal)
    } catch (e) {
        res.status(400).send(e)
    }
})

//update the meanPlan in the user DB
router.patch('/User',async(req,res)=>{
    const Updates=Object.keys(req.body)
    const allowedUpdates = ['name','calorieRequirement','mealPlan'] //User can update only the allowedUpdates fields
    const isValidOperation = Updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid Updates!'})  
    }
    try{

        Updates.forEach((update)=>req.User[update]=req.body[update])
        await req.User.save()
        
        res.status(200).send(req.User)
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router
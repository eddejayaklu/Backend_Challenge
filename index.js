const express = require('express')
require('./src/db/mongoose')
const foodRouter = require('./src/routers/fooditem')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(foodRouter)

app.listen(port,()=>{
    console.log("server is up",port)
})
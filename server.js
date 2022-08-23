//import dotenv library
require('dotenv').config()

//express dependencies
const express = require('express')
const app = express()

//mongodb dependencies 
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (error) => console.error(error))

db.once('open', () => console.log('Connected to Database'))

//allows our server to accept json format 
app.use(express.json())


//--------------- routes ---------------
const homeRouter = require('./routes/home')
app.use('/home', homeRouter)

app.listen(3000, () => console.log('Server Started'))
const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const connectDb = require("./config/connectDb");

// config .env file
dotenv.config();

// Database call
connectDb();

//rest object
const app=express();

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// routes
app.use('/api/v1/users', require('./routes/userRoute'))

//prt
const PORT=5050||process.env.PORT


// listen server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})


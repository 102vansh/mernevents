const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const route = require('./routes/contact.route')
dotenv.config({path:"./config/config.env"})
const port = process.env.PORT
require('./db/conn')
app.use(express.json())
app.use(cors({
    origin: ' http://localhost:5173',
    methods: ["POST"],
    credentials: true,
  }))
app.use(express.urlencoded({extended:true}))
app.use('/api/v1',route)
app.listen(port,(req,res)=>{
    console.log(`port is running at port no..${port}`)
})
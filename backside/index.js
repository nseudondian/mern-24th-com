const express = require('express')
const app = express()
const routers = require('./API/route')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')


dotenv.config()
mongoose.connect(process.env.DATA_ACCESS, { useUnifiedTopology: true }, ()=>console.log("Success!!!"))

app.use(express.json())
app.use(cors())
app.use('/api/routes', routers)



app.listen(5000, ()=>console.log("Server is alright!"))
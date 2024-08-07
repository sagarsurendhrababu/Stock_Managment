require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./config/db')
const stockRoutes = require('./routes/stockRoutes')

connectDB()
app.use(express.json())
app.use('/api/stocks', stockRoutes)
app.listen(process.env.PORT, () => console.log("server connected"))


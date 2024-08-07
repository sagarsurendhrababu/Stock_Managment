require('dotenv').config();
const mongoose = require('mongoose')

const connectDB = async function(){
    try{
        const connect = await mongoose.connect(process.env.DB)
        console.log("Data Base Connected "+ connect.connection.host)

    }catch(error){
        console.log(error.message)
    }
}

module.exports = connectDB;
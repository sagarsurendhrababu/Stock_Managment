const mongoose = require('mongoose')

const stockSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true,
    }    
},{
    timestamps:true
})

module.exports = mongoose.model("stock",stockSchema)
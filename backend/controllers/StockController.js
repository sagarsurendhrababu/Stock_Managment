const Stock = require('../models/Stock')

const getStock = async (req,res) => {
    try{
        const stocks = await Stock.find()
        res.json(stocks)
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const postStock = async (req,res) => {
    const {name,quantity} = req.body;
    try{
        const newStock = await Stock.create({name,quantity})  
        res.status(201).json(newStock)
    }catch(err){
        res.status(400).json({message:err.message});
    }
}

module.exports = {getStock,postStock}
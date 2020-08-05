const mongoose = require('mongoose');

const FruitSchema = mongoose.Schema({
    FruitName:{
        type:String,
    }
})

const Fruit = module.exports =  mongoose.model('Fruit',FruitSchema)
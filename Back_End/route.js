const express = require('express');
const Fruit = require('./Model/FruitSchema');
const { application } = require('express');
const { json } = require('body-parser');
const Route = express.Router();
let FruitName = ['Apple','Mango','Banana']
Route.get('/fruit',(req,res)=>{
    Fruit.find((err,Fruit)=>{
          res.json(Fruit)
    })
})
Route.post('/add',(req,res)=>{

    res.setHeader('Content-Type','application/json')
    const NewFruit = new Fruit({
        FruitName :req.body.FruitName        
    })
    NewFruit.save((err,result)=>{
        if (err) {
            res.json("Error"+err)
        }
        else{
            res.json('Fruit Added')
        } 
    })
})

Route.delete('/remove/:id',(req,res)=>{
    Fruit.findByIdAndDelete({_id:req.params.id},(err,result)=>{
        if (err) {
            res.json(err)
        }
        else{
            res.json("Fruit Removed")
        }
    })
})
Route.put('/update/:id',(req,res)=>{
    Fruit.findByIdAndUpdate({_id:req.params.id},{
        FruitName:req.body.FruitName
    },(err,result)=>{
        if (err) {
            res.json(err)
        }else{
            res.json('Updated Sucessfully')
        }
    })
})
module.exports = Route;
const express = require('express');
const Route = require('./route')
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
mongoose.connect('mongodb://localhost:27017/DB')
mongoose.connection.on('error',()=>{
    console.log('Not Connected')
})
mongoose.connection.once('connected',()=>{
    console.log('Connected')
})
app.use(cors());
app.use(bodyParser.json())
app.use('/',Route)
app.listen(5000,()=>{
    console.log('App is listening at port 5000')
})
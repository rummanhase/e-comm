const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const model = mon
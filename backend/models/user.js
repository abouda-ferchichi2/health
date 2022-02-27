//import mongoose
const mongoose = require('mongoose');

//create user Schema
const userSchema = mongoose.Schema({
    fullName:String,
    emailAdress:String,
    departement:String,
    tel:Number,
    message:String,
});
//create user Model
const user = mongoose.model('User',userSchema);
//exports user
module.exports = user;
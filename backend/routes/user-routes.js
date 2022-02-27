const express = require('express');

const router = express.Router();

//import User Model
const User = require('../models/user');

//Busniss Logic:User signup
router.post("/signup", (req,res)=>{
    console.log('Here into signup',req.body);
  const userObj = new User({
    fullName: req.body.fullName,
  emailAdress: req.body.emailAdress,
  departement: req.body.departement,
  tel: req.body.tel,
  message:req.body.message,
  });
  userObj.save((err, result)=>{
    console.log('Here result after save',result);
    if(err){
      console.log("Here err with DB",err);
    }else{
      res.json({
        message:"User added with success",
      });
    }
  });
  });
  
  //Busniss Logic : Login
  router.post("/login", (req,res)=>{
    console.log("Here into Login",req.body);
    User.findOne({email:req.body.email, password:req.body.password}).then(
      (result)=>{
        console.log('Here finded user',result);
        if(result){
          res.json({
            message:'OK'
          })
        }else{
          res.json({
            message:'NOT OK'
          });
        }  
      }
    )
  });







module.exports = router;
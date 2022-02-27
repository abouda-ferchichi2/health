//import express module
const express = require ('express');
//import body-parser module
const bodyParser = require ('body-parser');
const path = require('path');

//create express application
const app = express();
//configuration bodyParser
app.use(bodyParser.urlencoded({extended:true}));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/HealthDB');
app.use('/images', express.static(path.join('backend/images')))


//parsing request
app.use(bodyParser.urlencoded({extended:true}));
//JSON Response
app.use(bodyParser.json());
//security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, X-Requested-with"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST,DELETE, OPTIONS, PATCH, PUT"
    );
    next();
  });

  

// configuration de les routes

const doctorRouter = require('./routes/doctor-routes');
const userRouter = require('./routes/user-routes');

//exportation de les paths
app.use('/doctors',doctorRouter);
app.use('/users',userRouter);



module.exports = app;

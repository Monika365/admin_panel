const express = require('express');
const router = express.Router();
const retailerService = require('../service/retailer-service');

router.post('/register', function (req, res) {

    retailerService.register(req.body).then((result)=>{
res.status(201).send(result);
}).catch((error)=>{
    res.status(500).send(error);
})
})
  

// router.post('/login', function (req, res) {
//     console.log('body data in controller received', req.body);
//     UserService.login(req.body).then(result => {
//         res.status(result.status).send(result.response);
//     }).catch(err => {
//         res.status(err.status).send(err.response);
//     })
//     // res.send('Birds home page');
// })

// router.post('/forgotPassword', function (req, res) {
//     console.log('body data in controller received', req.body);
//     UserService.forgotPassword(req.body).then(result => {
//         res.status(result.status).send(result.response);
//     }).catch(err => {
//         res.status(err.status).send(err.response);
//     })
//     // res.send('Birds home page');
// })

// router.put('/resetPassword', function (req, res) {
//     console.log('body data in controller received', req.body);
//     UserService.resetPassword(req.body).then(result => {
//         res.status(result.status).send(result.response);
//     }).catch(err => {
//         res.status(err.status).send(err.response);
//     })
//     // res.send('Birds home page');
// })



module.exports = router;



// app.get('/getdata',function(req,res){
//     jda
//     res.send("hellow world")
// })
// app.method(routepath,middelware  function Handler);

// Middleware - In between Routepath and FUnction Handler 

// Middleware is copy of  function handler with extra parameter other than req,res it ahs 'next'


// first - middle - middle - last 

// Uses of Middleware
// 1. Validation of payload or headers 
// 2. Provide security to restrict accessing api feature
// 3. changing req, res object property 

// Midlware - two types of middleware one app level
// - express level , route lavel 

// app.use();

// function(req,res,next){

// }


// age size should be ggreater than equal to 2

// age -100

/* 1 */
// {
//     "_id" : ObjectId("615c51abfd33c5ad42abf10a"),
//     "name" : "John",
//     "age" : 29,
//     "phone" : 6787898790.0,
//     "email" : "be.techye@gmail.com",
//     "address" : "Bangalore",
//     "password" : "1234",
//     "__v" : 0,
//     "otp" : "7683"
// }



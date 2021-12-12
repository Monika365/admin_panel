const express = require('express');
const router = express.Router();
const wholesalerService = require('../service/wholesaler-service');

router.post('/register',function (req, res) {
    console.log('body data in function handler controller received', req.body);
    wholesalerService.create(req.body).then(result => {
        res.status(result.status).send(result.response);
    }).catch(err => {
        res.status(err.status).send(err.response);
    })
   
})
router.get('/getretailerListById/:id', function (req, res) {
    console.log('body data in controller received', req.params);
    wholesalerService.getretailerListById(req.params).then(result => {
        res.status(result.status).send(result.response);
    }).catch(err => {
        res.status(err.status).send(err.response);
    })
})




module.exports = router;
const express = require('express');

//Setting Up the Router.
const router = express.Router();
const realEstate = require('../models/realEstate');


//index Route.
router.get('/', async(req,res)=>{
    console.log(req.body, " This is req.body")
    try{
        const availableRealEstate = await realEstate.find();
        console.log(req.session,'this is req.session')
    }
    catch(err){
        res.send(err);
    }
})

module.exports = router;
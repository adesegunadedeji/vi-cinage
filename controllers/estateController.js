const express = require('express');

//Setting Up the Router.
const router = express.Router();
const realEstate = require('../models/realEstate');


//index Route.
router.get('/', async(req,res)=>{
    console.log(req.body, " This is req.body")
    try{
        const allRealEstate = await realEstate.find();
        console.log(req.session,'this is req.session')
        //React Response
        res.json({
            code:200,
            message:"Sucess",
            data:allRealEstate
        })
    }
    catch(err){
        res.send(err);
    }
})
//CREATE Route
router.post('/', async(req,res)=>{

    try{
        console.log(req.body, ' this is req.body');
        console.log(req.session, ' req.session in post route')
        const newRealEstate = await realEstate.create(req.body)
        res.json({
            status:{
            code:201,
            message:"Sucess"
            },
            data:newRealEstate
        })
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

//SHOW ROUTE
router.get("/:id", async(req, res) => {

    const foundRealEstate  = await realEstate.findById(req.params.id)
})

module.exports = router;
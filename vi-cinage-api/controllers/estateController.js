const express = require('express');

//Setting Up the Router.
const router = express.Router();
const realEstate = require('../models/realEstate');


//INDEX Route.
router.get('/', async(req,res)=>{
    console.log(`A visit coming in from ${req.session.userId}`)
    console.log(req.body, " This is req.body")
    try{
        const allRealEstate = await realEstate.find();
        console.log(req.session,'this is req.session')
        //React Response
        res.json({
            code:200,
            message:"Success",
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
            message:"Success"
            },
            data:newRealEstate
        })
    }
    catch(err){
            console.log(err)
            es.send(err)
    }
})

//SHOW ROUTE
router.get("/:id", async(req, res) => {
    try{
    const foundRealEstate  = await realEstate.findById(req.params.id)
    res.json({
        status:{
        code:200,
        message:"Success"
        },
        data:foundRealEstate
    })
}
    catch(err){
        console.log(err)
        res.send(err)
   }
})

//UPDATE ROUTE
router.put("/:id", async(req, res) => {
    try{
const updatedRealEstate = await realEstate.findByIdAndUpdate(req.params.id)
res.json({
    status:{
        code:200,
        message:"Successfuly Updated Resource"
    },
        data: updatedRealEstate
})
    }
    catch(err){
        console.log(err)
        res.send(err)
    }

})
//DELETE ROUTE
router.delete("/:id", async(req, res) => {
    try{
const deletedRealEstate = await realEstate.findByIdAndRemove(req.params.id)
res.json({
    status:{
        code:200,
        message:"Successfuly Deleted Resource"
    },
        data: deletedRealEstate
})
    }
    catch(err){
        console.log(err)
        res.send(err)
    }

})

module.exports = router;
const express = require('express');

//Setting Up the Router.
const router = express.Router();
const RealEstate = require('../models/realEstate');

// Creating the index route
router.get('/', async (req, res, next) => {
    // req.body this is from the fetch request
    console.log(req.body, ' this is get all')
       try  {
        const allRealEstate = await RealEstate.find().populate('user');
        console.log(req.session, ' this is req.session')
        // This is the response to react
        res.json({
          code: 200,
          message: "Success", 
          data: allRealEstate
        });
  
      } catch (err){
  
        res.send(err)
  
      }
  });
  
//CREATE Route
router.post('/', async(req,res)=>{
    req.body.user = req.session.userId //To know who's Logged In
    try{
        console.log(req.body, ' this is req.body');
        console.log(req.session, ' req.session in post route')
        const newRealEstate = await RealEstate.create(req.body)
            res.json({
            status:{
            code:201,
            message:"Successfully Created"
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
    const foundRealEstate  = await RealEstate.findById(req.params.id)
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
/

//UPDATE ROUTE
router.put("/:id", async(req, res) => {
    try{
const updatedRealEstate = await RealEstate.findByIdAndUpdate(req.params.id, {new: true})
res.json({
    status:{
        code:201,
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
const deletedRealEstate = await RealEstate.findByIdAndRemove(req.params.id)
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
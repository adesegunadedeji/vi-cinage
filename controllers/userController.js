const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs')

//CREATE Route // Resister Route
router.post('/', async(req,res)=>{
    try{
        const salt = bcrypt.genSaltSync();
        req.body.password = bcrypt.hashSync(req.body.password,salt)
        console.log(req.session, ' req.session in post route')
        const newUser= await User.create(req.body)
        req.session.userId = newUser._id
        res.redirect("/api/v1/realEstate") // Redirecting to the Real Estate Page After Succesful Login. 
        console.log(newUser)
    }
    catch(err){
            console.log(err)
            res.send(err)
    }
})

//Log In Route
router.post('/login', async(req,res)=>{
    console.log(req.body)
    try{
        const userFromDb = await User.findOne({username: req.body.username})
        console.log(req.body.password)
        const passwordIsValid = bcrypt.compareSync(req.body.password, userFromDb.password)
        console.log(userFromDb.password)
        if(passwordIsValid){
            req.session.userId = userFromDb._id
            res.redirect("/api/v1/realEstate")
        }
        else{
            res.send("Invalid Password")
        }
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})
module.exports = router;
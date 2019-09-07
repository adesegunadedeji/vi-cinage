const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs')

//CREATE Route // Register Route
router.post('/register', async(req,res)=>{

    const salt = bcrypt.genSaltSync();
    const password = req.body.password ; 

    const hashedPassword = bcrypt.hashSync(password,salt)
    console.log(hashedPassword)
    
    req.body.password = hashedPassword
    try{
        const newUser= await User.create(req.body)
        console.log('created user',newUser)
        req.session.userId = newUser._id
        req.session.username = newUser.username;
        req.session.logged = true;

        res.json({
            status:{code: 201
            },
            data:newUser
        })
    }
    catch(err){
            console.log("Error Message: ", err)
            res.send(err)
    }
})

//Log In Route
router.post('/login', async(req,res)=>{
    //Query Database to see if User Exists in Database

    try{
        const foundUser = await User.findOne({username: req.body.username})
        const password = req.body.password ; 
        console.log('found User', foundUser)

        //If user is found, Use bcrypt to swee if their password is valid
            if(foundUser){
                const passwordIsValid = bcrypt.compareSync(password, foundUser.password)
                console.log(foundUser.password)

                if(passwordIsValid){ //Set Session if Password is Valid
                    req.session.userId = foundUser._id
                    req.session.username = foundUser.username;
                    req.session.logged = true;

                    res.json({
                        status:{
                            code:200
                        },
                        data:foundUser
                    })
                }
                else{
                    res.session.message = "Invalid Username or Password"
                    res.json({
                        status:{
                            code: 500
                        },
                        message: "Invalid Credentials"
                    })
                }
    }
}
    catch(err){
        console.log(err)
        res.send(err)
    }
})

router.get('/logout', (req, res) => {

    req.session.destroy((err) => {
      if(err){
        res.send(err);
      } else {
        res.redirect('/');// Redirect back to homepage
      }
    })
  
  })

module.exports = router;
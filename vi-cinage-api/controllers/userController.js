import User from '../models/user.js';
const bcrypt = require('bcryptjs')

/**
 *Create User Registration
 *@POST {{baseUrl}}/api/v1/register
*/

export const userRegistration = async(req,res)=>{
    try{
        const salt = bcrypt.genSaltSync();
        const password = req.body.password ; 
        const hashedPassword = bcrypt.hashSync(password,salt)
        req.body.password = hashedPassword

        const newUser= await User.create(req.body)
        console.log('created user',newUser)
        req.session.userId = newUser._id
        req.session.username = newUser.username;
        req.session.logged = true;

        res.status(200).send({
            success: true,
            message: " User Succesfully created",
            data: newUser
        })
        // res.json({
        //     status:{code: 201
        //     },
        //     data:newUser
        // })
    }
    catch(err){
            console.log("Error Message: ", err);
            res.status(500).send({
                success: false,
                message: err
            })     
    }
}

/**
 *Fetch User Registration through Login
 *@POST {{baseUrl}}/api/v1/admin/login
*/
export const loginRegistration =  async(req,res)=>{
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
}
/**
 *Log Out 
 *@POST {{baseUrl}}/api/v1/admin/logout
*/
export const logOut =  (req, res) => {

    req.session.destroy((err) => {
      if(err){
        res.send(err);
      } else {
        res.redirect('/');// Redirect back to homepage
      }
    })
  
  }

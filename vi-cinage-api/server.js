const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI

const methodOverride = require('method-override');

//CORS allows request to come in from React
const corsOptions={
    credentials:true,
    origin:'http://localhost:3000',// Include Allowable Origin
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

//MiddleWare for User Login
app.use(session({
  secret: "keepitSecretQuantico",
  resave:false,
  saveUninitialized:false
}))

//MiddleWare
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); //can change to false
// parse application/json
app.use(bodyParser.json());
app.use(methodOverride('_method')); //For put and Delete


app.use((req,res,next)=>{
    console.log('this is who is logged in ', req.session.userId)
    next();
})

//Require controllers after Middleware.
const estateController = require('./controllers/estateController');
const userController = require('./controllers/userController')

app.listen(process.env.PORT|| 9000, ()=>{
    console.log('listening on port 9000');
})


app.use('/api/v1/realEstate',estateController) //Use in Estate Route
app.use('/user',userController) //Use in Users Route.



console.log(mongoURI)

mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.on('connection Message', () => {
    console.log('Mongoose is Connected!!!')
  });
  
  mongoose.connection.on('error Message', (err) => {
    console.log(err, ' mongoose failed to connect :(')
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected :(')
  });
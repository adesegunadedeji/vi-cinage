const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const db = require('./db/db');
const estateController = require('./controllers/estateController');
const mongoURI = 'mongodb://localhost:27017/'+'vi-cinage';
const methodOverride = require('method-override');
const corsOptions={
    origin:'http://localhost:3000',
    credentials:true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//MiddleWare
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); //can change to false
// parse application/json
app.use(bodyParser.json());
app.use(methodOverride('_method')); //For put and Delete
//MiddleWare for User Login
app.use(session({
    secret: "keepitSecretQuantico",
    resave:false,
    saveUninitialized:false
}))
app.use('/api/v1/realEstate',estateController)
app.use(cors(corsOptions));
app.listen(process.env.PORT|| 9000, ()=>{
    console.log('listening on port 9000');
})
//Establish Connection with Mongo
mongoose.connect(mongoURI,{useNewUrlParser:true});
mongoose.connection.once("open",()=>{
    console.log("Connected to Mongo")
})
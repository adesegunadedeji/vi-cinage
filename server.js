const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session        = require('express-session')
const db = require('./db/db');
//Require the controller after middleware
const estateController = require('./controllers/estateController')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//MiddleWare for User Login
app.use(session({
    secret: "Quan tico",
    resave:false,
    saveUninitialized:false
}))


const corsOptions={
    origin:'http://localhost:3000',
    credentials:true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use('/api/v1/realEstate',estateController)
app.use(cors(corsOptions));
app.listen(process.env.PORT|| 9000, ()=>{
    console.log('listening on port 9000');
})
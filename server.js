const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session        = require('express-session')
const db = require('./db/db');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



const corsOptions={
    origin:'http://localhost:3000',
    credentials:true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//Require the controller after middleware
const estateController = require('./controllers/estateController')
app.use('/api/v1/realEstate',estateController)

app.use(cors(corsOptions));
app.listen(process.env.PORT|| 9000, ()=>{
    console.log('listening on port 9000');
})
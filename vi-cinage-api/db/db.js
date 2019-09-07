const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI
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

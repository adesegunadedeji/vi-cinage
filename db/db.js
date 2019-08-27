const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/realEstate',{
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
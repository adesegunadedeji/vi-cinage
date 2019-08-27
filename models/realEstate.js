const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const realEstateSchema = new Schema({
    name: String,
    description: String,
    city: String,
    price: {type:Number, default:0},
    
},  {timestamps:true})
const realEstate = mongoose.model('realEstate', realEstateSchema);
module.exports = realEstate;
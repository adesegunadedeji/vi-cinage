const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const realEstateSchema = new Schema({
    name: String,
    city: String,
    price: {type:Number, default:0},
    description: String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    
},  {timestamps:true})

module.exports = mongoose.model('RealEstate', realEstateSchema);
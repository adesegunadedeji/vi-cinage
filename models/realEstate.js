const mongoose = require('mongoose');
const realEstateSchema = new mongoose.Schema({
    name: String,
    description: String,
    city: String,
    price: String,
    
})
module.exports = module.mode('realEstate', realEstateSchema)
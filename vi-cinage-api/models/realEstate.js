'use strict'
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const realEstateCompanySchema = new Schema({
    company_Name: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state:{ type: String, required: true },
    country:{ type: String, required: true },
    email: { type: String},
    contactNumber: { type: String, required: true },
    priceRange: {type:Number, default:0},
    openingHours: {type: String},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},  
{timestamps:true, 
    collection : 'realEstateCompany'

})

module.exports = mongoose.model('RealEstate', realEstateCompanySchema);
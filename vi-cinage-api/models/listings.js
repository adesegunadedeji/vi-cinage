'use strict'
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ListingsSchema = new Schema ({
    listings_name: { type: String, required: true},
    created_by: { type: String },
    updated_by: { type: String }
}, { timestamps: true } );

 const Listing = mongoose.model('Listing', ListingsSchema);

export default Listing;
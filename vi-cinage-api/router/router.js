import express from 'express';
const router = express.Router();

import {userRegistration, loginRegistration, logOut} from '../controllers/userController.js'
import {fetchSingleEstate,updateSingleEstate, deleteSingleEstate, addEstateAgency, fetchAllAgencies} from '../controllers/estateController.js';
import {addListing, updateListing, fetchAllListings, deleteSingleListing, fetchSingleListing} from '../controllers/listingsController.js';

/* 
User Authentication.
 */
router.post('/users/register',userRegistration );
router.post('/users/login',loginRegistration );
router.get('/users/logout',logOut );


/* 
Real Estate Agencies.
 */
router.get('/estates/:id',fetchSingleEstate);
router.get('/estates/:id',updateSingleEstate);
router.delete('/estates/:id',deleteSingleEstate);
router.post('/estates/new', addEstateAgency);
router.get('/estates/all', fetchAllAgencies);


/* 
Listings Category.
 */
router.post('/listings/new', addListing);
router.get('/listings/:id',fetchSingleListing);
router.get('/listings/all', fetchAllListings);
router.get('/listings/:id',updateListing);
router.delete('/listings/:id', deleteSingleListing);

//default 200 OK
router.get("health", (req, res) => {
    res.send("OK");
});



export {router as Router};
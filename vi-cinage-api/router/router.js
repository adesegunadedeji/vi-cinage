const express = require('express');
const router = express.Router();

import {userRegistration, loginRegistration, logOut} from '../controllers/userController';
import {fetchSingleEstate,updateSingleEstate, deleteSingleEstate, addEstateAgency, fetchAllAgencies} from '../controllers/estateController';
import {addListing, updateListing, fetchAllListings, deleteSingleListing, fetchSingleListing} from '../controllers/listingsController';

/* 
User Authentication.
 */
router.post('/user/register',userRegistration );
router.post('/user/login',loginRegistration );
router.get('/user/logout',logOut );

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


module.exports = router;

export { router };
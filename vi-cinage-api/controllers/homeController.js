import Home from '../models/homes.js';
import Listing from '../models/listings.js';
import RealEstate from '../models/realEstate.js';

/**
 *Fetch All Homes
 *@GET {{baseUrl}}/api/v1/homes
*/
export const fetchHomes = async (req, res, next) => {

    try  {
     const allHomes = await Home.find();
     res.json({
         code: 200,
         message: "All Homes Fetched", 
         data: allHomes
       });
   } catch (error){
     return res.status(500).send({
         success: false,
         message: error
     })
   }
};


/**
 *Add Home
 *@POST {{baseUrl}}/api/v1/homes/new
*/
export const addHome = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0)
        return res.status(400).send({ success: false, message: 'Please fill all  fields' });
        const {image, address,city,listings_id, zip_code,state,country, publishedStatus, year_built,sq_Ft, beds, baths,parking, price, home_type, agency_id} = req.body;
        const listing = await Listing.findById({_id: listings_id});
        const agency = await RealEstate.findById({_id: agency_id});
        const new_home = new Home({
            image: image,
            address : address,
            city : city,
            country: country,
            zip_code : zip_code,
            listings_id: listings_id,
            listings_type: listing.listings_type,
            agency_id : agency_id,
            agency: agency.agency_name,
            state : state,
            publishedStatus : publishedStatus, 
            year_built: year_built,
            sq_Ft: sq_Ft, 
            beds : beds,
            baths : baths,
            parking : parking, 
            price : price, 
            home_type : home_type
        });
        await new_home.save();
        return res.status(201).send({
            success: true,
            data: new_home,
            message: 'new home created successful'
        })
    } catch (error) {
        res.json({
            code: 500,
            message: 'Something went wrong',
            errors: error
          });
    }
}


/**
 *Update Homes
 *@PUT {{baseUrl}}/api/v1/homes/:id
*/

export const updateHomes =  async(req, res) => {
    try{

        const singleHome = await Home.findByIdAndUpdate(req.params.id, req.body, {new: true})
            if (!singleHome) {
                return res.status(404).send({
                 success: false,
                message: 'No matching records found for given ID.'
                });
            }
            else {
                res.json({
                    status:{
                        code:201,
                        message:"Successfuly Updated Resource"
                    },
                        data: singleHome
                })}
 }
    catch(err){
        return res.status(500).send({
            success: false,
            message: 'Invalid ID passed',
            Errors: error
        })
    }
}


/**
 *Delete Homes
 *@DELETE {{baseUrl}}/api/v1/homes/:id'
*/
export const deleteHomes =  async(req, res) => {

    try{
        const home_id = req.params.id;
        const deletedHome = await Home.findByIdAndRemove({_id: home_id});
        if(!home_id) {
            return res.status(404).send({
                success: false,
                message: 'No matching records found',
            })
        }
else {
    res.json({
    status:{
        code:200,
        message:"Successfuly Deleted Resource"
            },
    data: deletedHome
})
}
} catch(err){
        return res.status(500).send({
            success: false,
            message: error
        })
    }
}


/**
 *Fetch Single Hoe
 *@GET {{baseUrl}}/api/v1/homes/:id'
*/
export const fetchSingleHome =  async(req, res) => {
    
    try{
    const home_id = req.params.id;
    const singleHome  = await Home.findOne({ _id: home_id});
        
    if(!singleHome){
        return res.send({
            success: false,
            message: "No matching records found"
        })
    }
    else {
        res.status(200).send({
            success: true,
            data: singleHome,
            message: 'Single Home fetched'
        })
    }
}
    catch(err){
        console.log(err)
        res.status(500).send({
            success: false,
            message: " Invalid ID passed",
            error: err
        })
   }
}

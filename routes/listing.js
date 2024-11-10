const express = require("express");
const router = express.Router();
const wrapAsync= require("../utils/wrapAsync.js");  
const expressError = require("../utils/expressError.js");
const {listingSchema} = require("../schema.js");
const Listing = require("../Models/listing.js");


    // validation at servier side
    const validateListing = (req,res,next)=>{
        let {error}= listingSchema.validate(req.body);
        // console.log(result);
        if(error){
            throw new expressError(400, error);
        }
        else{
            next();
        }
    }


    // Index Route 
router.get("/listings", wrapAsync(async (req,res, next)=>{
    const allListings = await Listing.find({});        // runs a query to find all documents in the Listing collection
    req.flash("success"); 
    res.render("listings/index.ejs", {allListings});      
      }));
  
      // new Route to add vehicles 
    router.get("/listings/new", (req,res)=>{
        res.render("listings/new.ejs");
    });


    
// get all data of a particular list of vehicle  show.ejs
router.get("/listings/:id", wrapAsync(async (req,res,next)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
}));


// create route 

router.post("/listings",validateListing, wrapAsync(async (req, res )=> {
    // if(!req.body.listing){
    //     throw new expressError(400, "You missed some parts to run this motor 🔧🔩⚙️")
    // }
    let newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("Success", "New vehicle added Successfully");
    res.redirect("/listings");
   
}));



// Edit Route
router.get("/listings/:id/edit", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id); 
    res.render("listings/edit.ejs",{listing});
}));

// update route
router.put("/listings/:id", validateListing, wrapAsync(async(req,res, next)=>{
    let {id} = req.params;                  // extracts the id parameter from the request's parameters object
    await Listing.findByIdAndUpdate(id,{...req.body.listing})   // req.body.listing it is a js object which contains all the parameters
    req.flash("Success", "updated vehicle details Successfully");
    res.redirect(`/listings/${id}`);
}));


//Delete route

router.delete("/listings/:id", wrapAsync(async(req,res, next)=>{
    let {id} = req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("Success", "Deleted vehicle Successfully");
    res.redirect("/listings");    
}));


module.exports = router;
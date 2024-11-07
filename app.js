const express=require("express");   // imports the express library, which is used to build web applications in Node.js.  provides tools to handle http requests
const app=express();               //creates an instance of an Express application. app object that you'll use to define routes and handle incoming requests.
const mongoose=require("mongoose");
const Listing = require("./Models/listing.js");
const path =  require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");          // it helps to create templates and layouts
const wrapAsync= require("./utils/wrapAsync.js");  
const expressError = require("./utils/expressError.js");
const {listingSchema} = require("./schema.js");



const Mongo_URL ='mongodb://127.0.0.1:27017/vehicle';

main().then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(Mongo_URL);
}

app.use(express.json());    //  Middleware to parse JSON
app.set("view engine", "ejs");          // tells express to use ejs as template engine
app.set("views", path.join(__dirname, "views"));       // sets the directory where your view files are located.
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
// These pieces are foundational for setting up a server-side application with Express and MongoDB


app.get("/", (req,res)=>{
    res.render("listings/home.ejs");
});


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
app.get("/listings", wrapAsync(async (req,res, next)=>{
  const allListings = await Listing.find({});        // runs a query to find all documents in the Listing collection
    res.render("listings/index.ejs", {allListings});      
    }));

// new Route to add vehicles 
    app.get("/listings/new", (req,res)=>{
        res.render("listings/new.ejs");
    });


// get all data of a particular list of vehicle  show.ejs
app.get("/listings/:id", wrapAsync(async (req,res,next)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
}));


// create route 

app.post("/listings",validateListing, wrapAsync(async (req, res )=> {
    // if(!req.body.listing){
    //     throw new expressError(400, "You missed some parts to run this motor 🔧🔩⚙️")
    // }
    let newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
   
}));


// Edit Route
app.get("/listings/:id/edit", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id); 
    res.render("listings/edit.ejs",{listing});
}));

// update route
app.put("/listings/:id", validateListing, wrapAsync(async(req,res, next)=>{
    let {id} = req.params;                  // extracts the id parameter from the request's parameters object
    await Listing.findByIdAndUpdate(id,{...req.body.listing})   // req.body.listing it is a js object which contains all the parameters
    res.redirect(`/listings/${id}`);
}));


//Delete route

app.delete("/listings/:id", wrapAsync(async(req,res, next)=>{
    let {id} = req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");    
}));


// when  page doesn't exists
app.all("*", (req, res, next)=>{
    next(new expressError(404, "Page Not Found ⚠️"));
});



   // catch any errors 
   app.use((err,req,res,next)=>{
    let {statusCode =500, message="You need gears to ride buddy 🪖"} = err;
    res.status(statusCode).render("error.ejs", { message });    // extract statusCode and message from the error object (err). If statusCode or message are not defined, it assigns default values
    // res.status(statusCode).send(message);
});


app.listen(8080, () => {
    console.log("Server started on port 8080");
});

// app.get("/testListing", async(req,res)=>{
//     // let sampleListing=new Listing({
//     //     title : "Suzuki Swift Dezire",
//     //     description :" 4seater, petrol",
//     //     price: 1500,
//     //     location: "Calanguate, Goa",
//     //     country: "India",
//     // });

//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Successfull testing");
// });





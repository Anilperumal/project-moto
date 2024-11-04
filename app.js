const express=require("express");   // imports the express library, which is used to build web applications in Node.js.  provides tools to handle http requests
const app=express();               //creates an instance of an Express application. app object that you'll use to define routes and handle incoming requests.
const mongoose=require("mongoose");
const Listing = require("./Models/listing.js");
const path =  require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");          // it helps to create templates and layouts


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



// Index Route 
app.get("/listings", async (req,res)=>{
  const allListings = await Listing.find({});        // runs a query to find all documents in the Listing collection
    res.render("listings/index.ejs", {allListings});      
    });

// new Route to add vehicles 
    app.get("/listings/new", (req,res)=>{
        res.render("listings/new.ejs");
    });


// get all data of a particular list of vehicle
app.get("/listings/:id", async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});


// create route 

app.post("/listings", async (req, res)=> {
    try {
    let newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
} catch (err) {
    console.error(err);
    res.status(500).send("Error adding listing");
}});

// Edit Route
app.get("/listings/:id/edit", async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id); 
    res.render("listings/edit.ejs",{listing});
})

// update route
app.put("/listings/:id", async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing})   // req.body.listing it is a js object which contains all the parameters
    res.redirect(`/listings/${id}`);
})


//Delete route

app.delete("/listings/:id", async(req,res)=>{
    let {id} = req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");    
})

app.get("/", (req,res)=>{
    res.send("Welcome to MOTO-LEASE all vehicles rental at one place 🚗  🏍️  🛵   🚜")
})

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





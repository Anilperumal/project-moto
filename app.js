const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate"); // it helps to create templates/layouts. (benefits : code reusability)

const mongo_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => { // connecting the database wanderlust
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(mongo_URL);
}
// app.set(...) => to set various application-level configurations.

app.set("view engine", "ejs"); // Set EJS as the templating engine for rendering views
app.set("views", path.join(__dirname, "views")); // Define the directory where view templates (EJS files) are stored
app.use(express.urlencoded({extended: true})); 
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// making API
app.get("/", (req, res) => {
    res.send("Hi, I am root");
})

// Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});

// New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Show Route => kisi bhi individual listing ka sara data print karna
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});

// Create Route => adding new data in list
app.post("/listings", async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});

// Update Route
app.put("/listings/:id", async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

// Delete Route
app.delete("/listings/:id", async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});


// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My new Vehicle",
//         description: "By the Elictricity",
//         image : "",
//         price: 1200,
//         location: "Prayagraj, Allahabad",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Successful Testing");
// });

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});
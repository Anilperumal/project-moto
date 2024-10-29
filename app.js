const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const mongo_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => { // connecting the database wanderlust
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(mongo_URL);
}

// making API
app.get("/", (req, res) => {
    res.send("Hi, I am root");
})

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My new Vehicle",
        description: "By the Elictricity",
        image : "",
        price: 1200,
        location: "Prayagraj, Allahabad",
        country: "India",
    });
    await sampleListing.save();
    console.log("Sample was saved");
    res.send("Successful Testing");
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});
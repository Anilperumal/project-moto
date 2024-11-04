const mongoose = require("mongoose");
const inData = require("./data.js");
const Listing = require("../Models/listing.js");

const Mongo_URL ='mongodb://127.0.0.1:27017/vehicle';

main().then(()=>{
    console.log("DB connected 🤗");
}).catch((err)=>{
    console.log(err);
})


async function main() {
    await mongoose.connect(Mongo_URL);
}

const initDB = async() => {
    await Listing.deleteMany({});
    await Listing.insertMany(inData.data);
    console.log("Data intialized");
};

initDB();


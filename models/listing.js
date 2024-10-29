const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://www.google.com/imgres?q=electric%20suv&imgurl=https%3A%2F%2Fi.insider.com%2F62c85673114c1e001872bdff%3Fwidth%3D700&imgrefurl=https%3A%2F%2Fwww.businessinsider.com%2Frivian-r1s-electric-suv-photos-review-range-tesla-2022-7&docid=9eWw7kCK8mb25M&tbnid=-MoTQtdfW59mSM&vet=12ahUKEwijspyZhLOJAxWbd2wGHYYlC08QM3oECGEQAA..i&w=700&h=434&hcb=2&ved=2ahUKEwijspyZhLOJAxWbd2wGHYYlC08QM3oECGEQAA",
        set: (v) =>
            v === "" ? "Default image link" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
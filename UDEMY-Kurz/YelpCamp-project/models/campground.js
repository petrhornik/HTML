const mongoose = require("mongoose");

const Schema = mongoose.Schema;     // proměnná pro "centrální" schéma, pro více referencí zároveň

const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String,
})

module.exports = mongoose.model("Campground", CampgroundSchema); //kompilace a export celého modelu
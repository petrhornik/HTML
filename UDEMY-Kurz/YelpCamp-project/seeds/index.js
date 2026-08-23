// hlavní soubor pro seedování -> kompletně standalone.
// kombinuje citiesSeeds a seedHelpers pro vložení více dat do DB pro manipulaci

const path = require("path");
const mongoose = require("mongoose");
const cities = require("./citiesSeeds")
const {places, descriptors} = require("./seedHelpers");

const Campground = require("../models/campground");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("GUT! -> DB connected!")
});

mongoose.connect("mongodb://localhost:27017/YelpCamp-project");


// univerzální randomizovaný výběr 1 položky z passnutého arraye
const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
        });
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});
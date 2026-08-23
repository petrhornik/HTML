// centrální soubor celé web. aplikace odkud se všechno řídí

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");


// import modelů
const Campground = require("./models/campground");


// connection do DB -> v kurzu už depricated způsob, tak jsem z toho uvařil tenhle mess (v praxi používat klasicky .then promise)
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("GUT! -> DB connected!")
})
mongoose.connect("mongodb://localhost:27017/YelpCamp-project");



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("home")
})

// index všech campů
app.get("/campgrounds", async (req,res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", {campgrounds})
});

// detail jednoho campu
app.get("/campgrounds/:id", async (req,res) => {
    const {id} = req.params;
    const camp = await Campground.findOne({_id: id});
    res.render("campgrounds/show", {camp});
})

app.listen(3000, () => {
    console.log("GUT! -> jedu na portu 3000");
})
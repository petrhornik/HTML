// centrální soubor celé web. aplikace odkud se všechno řídí

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// import modelů
const Campground = require("./models/campground");


// connection do DB -> v kurzu už depricated způsob, tak jsem z toho uvařil tenhle mess (v praxi používat klasicky .then promise)
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("GUT! -> DB connected!")
})
mongoose.connect("mongodb://localhost:27017/YelpCamp-project");


// konfigurace expressJS 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true})); // bez tohoto mi express nebude parsovat HTML formy v POST requestu
app.use(methodOverride("_method"));     // díky tomuto můžu používat i další CRUD metody mimo GET, POST

// samotný BE
app.get("/", (req,res) => {
    res.render("home")
})

// index všech campů
app.get("/campgrounds", async (req,res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", {campgrounds})
});

// přidání nového campu

app.get("/campgrounds/new", (req,res) => {
    res.render("campgrounds/new");
});

app.post("/campgrounds", async (req,res) => {
    const newCamp = new Campground(req.body.campground); // odkazuju se na konkrétní kolekci(HTML group) z formuláře
    await newCamp.save();
    res.redirect(`/campgrounds/${newCamp._id}`);
});

// detail jednoho campu
app.get("/campgrounds/:id", async (req,res) => {
    const {id} = req.params;
    const camp = await Campground.findOne({_id: id});
    res.render("campgrounds/show", {camp});
});

//editace 1 campu

app.get("/campgrounds/:id/edit", async (req,res) => {
    const {id} = req.params;
    const camp = await Campground.findOne({_id: id});
    res.render("campgrounds/edit", {camp});
});

app.put("/campgrounds/:id", async (req,res) => {
    const {id} = req.params;
    await Campground.findOneAndUpdate({_id: id}, req.body.campground);
    res.redirect(`/campgrounds/${id}`)
})

// smazání campu

app.delete("/campgrounds/:id", async (req,res) => {
    const {id} = req.params;
    await Campground.findOneAndDelete({_id: id});
    res.redirect("/campgrounds");
})

app.listen(3000, () => {
    console.log("GUT! -> jedu na portu 3000");
});
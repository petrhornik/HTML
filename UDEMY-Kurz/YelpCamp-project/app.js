// centrální soubor celé web. aplikace odkud se všechno řídí

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate"); // engine pro ejs, který umožňuje používat layouty
const methodOverride = require("method-override");

// import custom error class a error function wrapperu

const ExpressError = require("./utils/ExpressError.js");
const catchAsync = require("./utils/catchAsync.js");

// import nástroje pro validaci dat (JOI) a schématu ze souboru (s campgroundSchema je už import JOI obsažen tak bude fungovat i zde bez problémů)

const {campgroundSchema} = require("./utils/joiSchemas.js");

// import modelů
const Campground = require("./models/campground");
const { stat } = require("fs");


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

app.engine("ejs", ejsMate); // udává ře místo výchozího enginu ejs se využije na zpracování ejs-mate
app.use(express.urlencoded({extended: true})); // bez tohoto mi express nebude parsovat HTML formy v POST requestu
app.use(methodOverride("_method"));     // díky tomuto můžu používat i další CRUD metody mimo GET, POST

// tvorba JOI schema validačního middleware

const JoiValidateCampgroud = (req,res,next) => {
    // volám si sem na validaci schéma ze ./utils/joiSchemas.js
    const {error} = campgroundSchema.validate(req.body); // provede validaci celého req.body jestli splňuje podmínky definované ve schématu a vrací BOOLEAN
    if (error){
        console.dir(error.details)
        const errMsg = error.details.map(element => element.message).join(","); // .map mi přeloopuje přes array objektů s chybami a z každého objektu (element) mi vezme message, následně ze všech získaných message udělá array, pomocí .join se mi položky v arrayi spojí do společného stringu s použítím specifikovaného "děliče"
        throw new ExpressError( errMsg , 403); // pokud validační objekt najde nesrovnalost mezi Joi schématem a requestem vrátí objekt obsahující error jinak ne -> proto kontroluji právě ten
    } else {
        next(); // pokud je vše v pořádku pokračuju další fcí
    };
};


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

app.post("/campgrounds", JoiValidateCampgroud, catchAsync(async (req,res,next) => {   // detekce erroru všude uvnitř tzv. wrapper funkce triggerující error handler
    const newCamp = new Campground(req.body.campground);
    await newCamp.save();
    res.redirect(`/campgrounds/${newCamp._id}`);
}));

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

app.put("/campgrounds/:id", JoiValidateCampgroud, catchAsync(async (req,res) => {
    const {id} = req.params;
    await Campground.findOneAndUpdate({_id: id}, req.body.campground);
    res.redirect(`/campgrounds/${id}`)
}))

// smazání campu

app.delete("/campgrounds/:id", async (req,res) => {
    const {id} = req.params;
    await Campground.findOneAndDelete({_id: id});
    res.redirect("/campgrounds");
})

// více ukázek error handlingu

app.all("/{*path}", (req,res,next) => { // provede se najémkoli http requestu na určitou routu -> v tomto případě, úplně na každou routu (to v "" určuje všechny routy)
    next(new ExpressError("Cesta nenalezena :(", 404));      // bude triggerovat pouze u všeho co už není nějak specifikováno výše či pokud se někde výš nevrátí error objekt...
});

// MAIN error handler

app.use((err,req,res,next) => {
    const {statusCode = 500} = err;  // vytáhnu hodnoty z mého custom error objektu (z mé custom třidy) a nastavím jim defaultní hodnoty, kdyby v sobě nic neobsahovaly
    if (!err.message) err.message = "Vyskytla se interní chyba";
    err.statusCode = statusCode;    // dopsání kvůli tomu aby se mi to passnulo do renderu v error objektu
    res.status(statusCode).render("error", {err});     // pomocí res.status() můžu zpět poslat svůj specifický status kód co se zobrazí v responze ze serveru v prohlížeči
})

app.listen(3000, () => {
    console.log("GUT! -> jedu na portu 3000");
});
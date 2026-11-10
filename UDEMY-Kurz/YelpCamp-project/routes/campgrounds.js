// SOUBOR PRO ULOŽENÍ ROUTŮ PRO CAMPGROUNGS

const express = require("express");
const router = express.Router()

// import custom error class a error function wrapperu
const ExpressError = require("../utils/ExpressError.js");
const catchAsync = require("../utils/catchAsync.js");

// import modelů
const Campground = require("../models/campground");

// import schématu ze souboru (s campgroundSchema je už import JOI obsažen tak bude fungovat i zde bez problémů)
const {campgroundSchema} = require("../utils/joiSchemas.js");
const campground = require("../models/campground");


// tvorba JOI schema validačního middleware
const JoiValidateCampgroud = (req,res,next) => {
    // volám si sem na validaci schéma ze ./utils/joiSchemas.js
    const {error} = campgroundSchema.validate(req.body); // provede validaci celého req.body jestli splňuje podmínky definované ve schématu a vrací BOOLEAN
    if (error){
        const errMsg = error.details.map(element => element.message).join(","); // .map mi přeloopuje přes array objektů s chybami a z každého objektu (element) mi vezme message, následně ze všech získaných message udělá array, pomocí .join se mi položky v arrayi spojí do společného stringu s použítím specifikovaného "děliče"
        throw new ExpressError(errMsg , 403); // pokud validační objekt najde nesrovnalost mezi Joi schématem a requestem vrátí objekt obsahující error jinak ne -> proto kontroluji právě ten
    } else {
        next(); // pokud je vše v pořádku pokračuju další fcí
    };
};


// ROUTY pro campgrounds

// index všech campů
router.get("/", async (req,res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", {campgrounds})
});

// přidání nového campu
router.get("/new", (req,res) => {
    res.render("campgrounds/new");
});

router.post("/", JoiValidateCampgroud, catchAsync(async (req,res,next) => {   // detekce erroru všude uvnitř tzv. wrapper funkce triggerující error handler
    const newCamp = new Campground(req.body.campground);
    await newCamp.save();
    req.flash("success", "Camp úspěšně vytvořen!!")
    res.redirect(`/campgrounds/${newCamp._id}`);
}));

// detail jednoho campu
router.get("/:id", async (req,res) => {
    const {id} = req.params;
    const camp = await Campground.findOne({_id: id}).populate("reviews");
    if(!camp){
        req.flash("error", "Stránka tohoto campu již neexistuje!!");
        return res.redirect("/campgrounds"); // tip - u redirectu musím dát celou routu...
    }
    res.render("campgrounds/show", {camp});
});

//editace 1 campu
router.get("/:id/edit", async (req,res) => {
    const {id} = req.params;
    const camp = await Campground.findOne({_id: id});
    if(!camp){
        req.flash("error", "Snažíte se upravit neexistující camp!!");
        return res.redirect("/campgrounds");
    }
    res.render("campgrounds/edit", {camp});
});

router.put("/:id", JoiValidateCampgroud, catchAsync(async (req,res) => {
    const {id} = req.params;
    await Campground.findOneAndUpdate({_id: id}, req.body.campground);
    req.flash("success", "Editace proběhla úspěšně!")
    res.redirect(`/campgrounds/${id}`)
}))

// smazání campu
router.delete("/:id", async (req,res) => {
    const {id} = req.params;
    const camp = await Campground.findOneAndDelete({_id: id});
    req.flash("success", "Smazání proběhlo úspěšně!")
    res.redirect("/campgrounds");
})


// export routeru
module.exports = router;
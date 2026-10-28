// SOUBOR PRO ULOŽENÍ ROUTŮ PRO REVIEWS

const express = require("express");
const router = express.Router({mergeParams: true});

// import custom error class a error function wrapperu
const ExpressError = require("../utils/ExpressError.js");
const catchAsync = require("../utils/catchAsync.js");

// import modelů
const Campground = require("../models/campground");
const Review = require("../models/review.js")

// import schématu ze souboru (s campgroundSchema je už import JOI obsažen tak bude fungovat i zde bez problémů)
const {reviewSchema} = require("../utils/joiSchemas.js");


// JOI validace pro review
const JoiValidateReview = (req,res,next) => {
    const {error} = reviewSchema.validate(req.body);
    if(error){
        const errMsg = error.details.map(element => element.message).join(",");
        throw new ExpressError(errMsg , 403);
    } else{
        next(); // není chyba = gut = pokračuj :D
    }

};


// přidání recenze
router.post("/", JoiValidateReview, catchAsync(async (req,res) => {    // vyhledá camp a vytvoří z requestu review, násldně review přidá do arraye v campground kde si díky schema uloží jen ID, potom se uloží jak camp tak review
    const {id} = req.params;
    const {body, rating} = req.body.review;
    const camp = await Campground.findById(id);
    const review = new Review({body: body, rating: rating});
    camp.reviews.push(review);
    await review.save();
    await camp.save();
    res.redirect(`/campgrounds/${camp._id}`);
}));

// smazání recenze
router.delete("/:reviewID/delete", catchAsync(async (req,res) => {
    const {id, reviewID} = req.params;
    await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewID}}); // pomocí operátoru pull se mi vytáhne z arraye pryč specifikovaná hodnota
    await Review.findByIdAndDelete(reviewID);
    res.redirect(`/campgrounds/${id}`);
}))

module.exports = router;
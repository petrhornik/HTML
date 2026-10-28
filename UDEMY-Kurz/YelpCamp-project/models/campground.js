const mongoose = require("mongoose");
const Review = require("./review")
const Schema = mongoose.Schema;     // proměnná pro "centrální" schéma, pro více referencí zároveň

const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ]
})

CampgroundSchema.post("findOneAndDelete", async function(document){ //veškerá data se kterými se manimupovalo v requestu se passují do post middlewaru triggernutého tímto requestem
    console.log(document)
    if(document){
        await Review.deleteMany({_id: {$in: document.reviews}});    // nepotřebuju populate v tomto případě...
    }
})

module.exports = mongoose.model("Campground", CampgroundSchema); //kompilace a export celého modelu
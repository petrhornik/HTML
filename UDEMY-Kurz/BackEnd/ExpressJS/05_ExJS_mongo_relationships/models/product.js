// mol mongoose modelu pro produkt

const mongoose = require("mongoose");
const {Schema} = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Název produktu musí být vyplněn!!"],
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Cena musí být 0 či více!"],
    },
    category: {
        type: String,
        lowercase: true,                       
        enum: ["fruit", "vegetable", "diary"],
    },
    farm: { // odkazování na parent (farmu) zdde tvořeného dokumentu
        type: Schema.Types.ObjectId,
        refs: "Farm",   // referencujeme položku používající model Farm (nšco z kolekce farms v DB)
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product ;
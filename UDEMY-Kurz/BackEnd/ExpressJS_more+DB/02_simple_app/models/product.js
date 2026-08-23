// tento soubor bude obsahovat jen relevantní content pro mongoose model Product a bude zpětně napojen na index.js -> pro lepší přehlednost
// v production bývá modelů hodně... :D

const mongoose = require("mongoose"); // nic nenapojuji, toto pro tvorbu modelu stačí

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Cena musí být 0 či více!"],
    },
    category: {
        type: String,
        lowercase: true,                        //jakákoli instance modelu využívajícího toto schéma bude mít category vždy v lowercase
        enum: ["fruit", "vegetable", "diary"],
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product ; // nemužu uzavřít do {} !!!
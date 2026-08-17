const mongoose = require("mongoose");


mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("Everything working GUT!");
  })
  .catch((err) => {
    console.log("OH NO error:");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,     // každá položka tvořená přes toto schéma musí povinně obsahovat name, jinak se vyskytne chyba
        
    },
    price: {
        type: Number,
    }
});

const Product = mongoose.model("Product", productSchema);

const kolo = new Product({name: "Xiaomi SU7", price: "零零零零"})

kolo.save()
.then(data => {
    console.log("OK");
    console.log(data)
})
.catch(err => {
    console.log("SHIT");
    console.log(errzy)    // vrátí pouze názvy chyb, nikoli celé error codes //err je objekt a obsahuje více dat
})
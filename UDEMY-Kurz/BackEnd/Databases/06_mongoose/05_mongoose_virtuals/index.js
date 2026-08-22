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

const personSchema = mongoose.Schema({      //schéma fullName neobsahuje!!!
    first: String,
    last: String,
});

personSchema.virtual("fullName").get(function() {   // přidání virtuální hodnoty co se "přidá" k schématu dokumentu se kterým manipuluji
    return `${this.first} ${this.last}`;            // zde se opět odkazuji na položku, stejně jako u instance metod pro výpis
}).set(function(v) {                                 //zde se provádí manupulace pomocí tohoto virtuálu
    this.first = v.substr(0, v.indexOf(" "));
    this.last = v.substr(v.indexOf(" ") + 1);
})

const Person = mongoose.model("Person", personSchema); 
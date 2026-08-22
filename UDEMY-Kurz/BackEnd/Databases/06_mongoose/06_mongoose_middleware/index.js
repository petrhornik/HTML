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

const personSchema = mongoose.Schema({
    first: String,
    last: String,
});

personSchema.pre("save", async function () {      // middleware co se provede PŘED uložením položky/dokumnetu
    this.first = "Freddy Fazbear";                 // middleware může accesovat právě manipulovaný dokument a do jeho hodnot a upravovat je...
    this.last = "har har har har har har",
    console.log("Bude se ukládat! XDD")
})

personSchema.post("save", async function () {      // middleware co se provede PO uložením položky/dokumnetu
    console.log("Dokument byl uložen!!")
})

const Person = mongoose.model("Person", personSchema);
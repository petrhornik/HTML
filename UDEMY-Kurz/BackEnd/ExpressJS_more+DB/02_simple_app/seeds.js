// komplet samostatný soubor, který není součástí web. aplikace -> použití pouze na nahrání prvotních dat do DB

const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/foodStockApp")
  .then(() => {
    console.log("mongoose connected to db -> GUT!");
  })
  .catch((err) => {
    console.log("OH NO error in connection:");
    console.log(err);
  });


/* const product1 = new Product({
    name: "Grep",
    price: 24,
    category: "Fruit",
})

product1.save().then(res => console.log(res)).catch(e => console.log(e)); 

*/

const foodDbSeeds = [
    { name: "Apple", price: 29.4, category: "fruit" },
    { name: "Carrot", price: 19.6, category: "vegetable" },
    { name: "Milk", price: 36.75, category: "diary" },
    { name: "Banana", price: 20.25, category: "fruit" },
    { name: "Broccoli", price: 24.5, category: "vegetable" }
];

Product.insertMany(foodDbSeeds).then(res => console.log(res)).catch(e => console.log(e));


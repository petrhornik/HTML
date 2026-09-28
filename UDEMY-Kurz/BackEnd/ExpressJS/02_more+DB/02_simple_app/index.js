const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose");
const methodOverride = require("method-override")

// import modelů z /models (old way, ale takhle to ma v kurzu -> používat pak už klasicky ES6 metodu importu)

const Product = require("./models/product");
const categories = ["fruit", "vegetable", "diary", "mushrooms"];        //externě specifikované a do formů se to dynamicky importuje

// konfigurace/napojení mongoose na MongoDB
mongoose
  .connect("mongodb://localhost:27017/foodStockApp")
  .then(() => {
    console.log("mongoose connected to db -> GUT!");
  })
  .catch((err) => {
    console.log("OH NO error in connection:");
    console.log(err);
  });

// konfigurace expressJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));                 // využití knohovny pro oblbnutí HTML formů aby jejich GET/POST requesty uměly i PUT, PATCH, atd.

//všechny produkty (+ filter kategorií)
app.get("/products", async (req,res) => {       //vždy když chci manipulovat s mongoose/mongoDB dotazy, tak musím mít fce/routy async a awaitovat mongoose interakci
    const {category} = req.query;
    if (category){
        const products = await Product.find({category}); // pokud mám proměnnou se stejným názvem jako key-val v DB/modelu tak stačí napsat do qry jednou
        res.render("products/index", {products, category});
    }else{
        const products = await Product.find({});
        res.render("products/index", {products, category: "All"});
    }
});

//form pro vytvoření produktu
app.get("/products/new", (req,res) => {
    res.render("products/new", {categories})
});

app.post("/products/new", async (req,res) => {
    const data = req.body;
    console.log(data);
    await Product.insertOne({name: data.name, price: data.price, category: data.category}, {validate: true});   //data z req.body pošlu pomocí modelu a insertOne do DB
    res.redirect("/products");  // po dokončení přesměruje na index produktů
});

//detail produktu
app.get("/products/:id", async (req, res) => {
    const {id} = req.params;
    const resultProduct = await Product.findById(id);
    res.render("products/detail", {resultProduct});
});

//edit produktu

app.get("/products/:id/edit", async (req,res) => {
    const {id} = req.params;
    const resultProduct = await Product.findById(id);
    res.render("products/edit", {resultProduct, categories});
});

app.put("/products/:id/edit", async (req,res) => {      //update celé položky
    const {id} = req.params;
    await Product.findByIdAndUpdate(id, req.body, {runValidators: true});   // update položky s validací s daty z req.body
    res.redirect(`/products/${id}`)
});

// mazání produktu

app.delete("/products/:id/delete", async(req,res) => {  //delete CRUD request
    const {id} = req.params;
    await Product.deleteOne({_id: id});
    res.redirect("/products")
})

// nastartování expressjs
app.listen(3000, () => {
    console.log("Jedu a poslouchám na 3000!");
});
const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose");
const methodOverride = require("method-override")
const AppError = require("./AppError.js")

const Product = require("./models/product");
const categories = ["fruit", "vegetable", "diary", "mushrooms"];      


mongoose
  .connect("mongodb://localhost:27017/async_errors")
  .then(() => {
    console.log("mongoose connected to db -> GUT!");
  })
  .catch((err) => {
    console.log("OH NO error in connection:");
    console.log(err);
  });


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));                


app.get("/products", async (req,res) => {       
    try{
        const {category} = req.query;
        if (category){
            const products = await Product.find({category});
            res.render("products/index", {products, category});
        }else{
            const products = await Product.find({});
            res.render("products/index", {products, category: "All"});
        }
    }catch(e){
        next(e);    // vrátí error co si už zpracuje můj handler dole :DD
    }
});


app.get("/products/new", (req,res) => {
    res.render("products/new", {categories})
});

app.post("/products/new", async (req,res, next) => {
    try{                        // ,ukázka hadlování erroru z mongoose (v novym expressu už handluje automaticky)
        const data = req.body;
        console.log(data);
        await Product.insertOne({name: data.name, price: data.price, category: data.category}, {validate: true});  
        res.redirect("/products");  
    }catch(e){
        next(e);
    }
});

//detail produktu
app.get("/products/:id", async (req, res, next) => {
    try{
        const {id} = req.params;
        const resultProduct = await Product.findById(id);
        if(!resultProduct){
            throw new AppError("Produkt nenalezen...", 404);
        };
        res.render("products/detail", {resultProduct});
    }catch(e){
        next(e);
    }
});

//edit produktu

app.get("/products/:id/edit", async (req,res, next) => {
    const {id} = req.params;
    const resultProduct = await Product.findById(id);
    if(!resultProduct){
        return next(new AppError("Produkt nenalezen...", 404)); // syntax pro funkcionalitu Error handleru v async fcích., počítá jen s 1 konkrétním errorem
    };
    res.render("products/edit", {resultProduct, categories});
});

app.put("/products/:id/edit", async (req,res) => {     
    const {id} = req.params;
    await Product.findByIdAndUpdate(id, req.body, {runValidators: true});  
    res.redirect(`/products/${id}`)
});

app.delete("/products/:id/delete", async(req,res) => {  
    const {id} = req.params;
    await Product.deleteOne({_id: id});
    res.redirect("/products")
})

// definování error handleru, triggruju pomocí Error objektu/ mého AppError objektu

app.use((err,req,res,next) => {     // specifikace error handleru
    const {status = 500, message = "Something went wrong!"} = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("Jedu a poslouchám na 3000!");
});
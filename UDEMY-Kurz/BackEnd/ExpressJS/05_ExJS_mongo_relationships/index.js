const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose");
const methodOverride = require("method-override")
const AppError = require("./AppError.js")

// import modelu Product

const Product = require("./models/product");
const { send } = require("process");
const categories = ["fruit", "vegetable", "diary", "mushrooms"];      

// import modelu Farm

const Farm = require("./models/farm")

mongoose
  .connect("mongodb://localhost:27017/relationships_n_express")
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

// FARM ROUTY

app.get("/farms", async (req,res) => {
    const existingFarms = await Farm.find({});
    res.render("farms/index", {existingFarms});
});

app.get("/farms/new", (req,res) => {
    res.render("farms/new");
});

app.post("/farms/new", async (req,res) => {
    const newFarm = new Farm(req.body);
    await newFarm.save();
    res.redirect("/farms");
});

app.delete("/farms/delete/:id", async (req,res) => {
    const {id} = req.params;
    const farm = await Farm.findByIdAndDelete(id)
})

app.get("/farms/:id", async (req,res) => {
    const {id} = req.params;
    const farm = await Farm.findById(id).populate("products"); // populate - nahrazení ObjectID za celý dokument
    res.render("farms/detail", {farm});
})

// nested routing - tvorba produktu pro konkrétní farmu

app.get("/farms/:id/products/new", async (req,res) => { // tip - samotná routa mi nic nenestuje musím si to udělat v {}
    const {id} = req.params;
    const farm = await Farm.findById(id);
    res.render("products/new", {categories, farm});
})

app.post("/farms/:id/products/new", async (req,res) =>{
    const {id} = req.params;
    const farm = await Farm.findById(id);
    const {name, price, category} = req.body;
    const newProduct = new Product({name, price, category});
    farm.products.push(newProduct); // přidání ObjectID do dokumentu farmy (one to many vazba)
    newProduct.farm = farm; // (one to bilions vazba) - dám objectID farmy na samotný child dokument
    await farm.save();
    await newProduct.save();
    res.redirect(`/farms/${id}`);
})

// PRODUCT ROUTY

app.get("/products", async (req,res) => {       
    try{
        const {category} = req.query;
        if (category){
            const products = await Product.find({category}).populate("farm");
            res.render("products/index", {products, category});
        }else{
            const products = await Product.find({});
            res.render("products/index", {products, category: "All"}).populate("farm");
        }
    }catch(e){
        next(e);
    }
});


app.get("/products/new", (req,res) => {
    res.render("products/new", {categories})
});

app.post("/products/new", async (req,res, next) => {
    try{                   
        const data = req.body;     
        console.log(data);
        await Product.insertOne({name: data.name, price: data.price, category: data.category}, {validate: true});  
        res.redirect("/products");  
    }catch(e){
        next(e);
    }
});

const wrapAsync = (fn) => {       
    return function(req,res,next){  
        fn(req,res,next).catch(e => next(e))    
    }
}
    
//detail produktu
app.get("/products/:id", wrapAsync(async (req, res, next) => {  // upraveno pro vypsání farmy do které produkt náleží
        const {id} = req.params;
        const resultProduct = await Product.findById(id).populate("farm");
        console.log(resultProduct)
        if(!resultProduct){
            throw new AppError("Produkt nenalezen...", 404);
        };
        res.render("products/detail", {resultProduct});
    })
);


//edit produktu

app.get("/products/:id/edit", async (req,res, next) => {
    const {id} = req.params;
    const resultProduct = await Product.findById(id);
    if(!resultProduct){
        return next(new AppError("Produkt nenalezen...", 404)); 
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

// definování error handleru mongoose errory (ValidationError, atd.)

const handleValidationErr = (err) => {
    console.dir(err);
    return new AppError("Validace selhala: " + err.message, 400);
};

app.use((err,req,res,next) => {
    console.log(err.name);
    err.name == "ValidationError" && (err = handleValidationErr(err));
})

// definování error handleru, triggruju pomocí Error objektu/ mého AppError objektu

app.use((err,req,res,next) => {    
    const {status = 500, message = "Something went wrong!"} = err;
    res.status(status).send(message, err);
})

app.listen(3000, () => {
    console.log("Jedu a poslouchám na 3000!");
});
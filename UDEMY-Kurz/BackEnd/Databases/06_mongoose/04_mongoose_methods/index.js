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

const acceptedSizes = ["S", "M", "L"];

const productSchema = new mongoose.Schema({
    name: {             
        type: String,
        required: true,     
        maxLength: 20,      
        
    },
    price: {            
        type: Number,
        required: true,
        min: [0, "Cena musí být větší než 0!!!"],         
    },
    onSale: {
        type: Boolean,
        default: false,     
    },
    categories: [String],
    qty: {                  
        online: {       
            type: Number,
            default: 0,
        },
        inStore: {          
            type: Number,
            default: 0,
        }
    },
    size: {
        type: String,
        enum: acceptedSizes,
    }
});

// inscane methods definition

productSchema.methods.greet = function () { // metoda co se páruje na dané schéma, je to instance method, takže se dá zavolat na instanci (položce) modelu co ono schéma využívá
    console.log("HELLO WORLD!");
    console.log(`- jméno produkutu ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
    try {
        this.onSale = !this.onSale;
        return this.save();
    } catch (err) {
        console.log(err)
    };
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

// static methods definition -> metody pro celý model

productSchema.statics.fireSale = function () {      // update všech instancí/položek v modelu
    await this.updateMany({}, {onSale: true, price: 0});                              // this označuje celý model který schéma využívá (konkrétně všechny položky/dokumenty v kolekci se kterou je model "spojen")
}

const Product = mongoose.model("Product", productSchema);   //model je v podstatě konstruktor instancí (položek) ze schématu

// využití předdefinovaných instance metods pro repeptetivní části kódu

const findProductAndGreet = async (productName) => {
    const foundProduct = await Product.findOne({name: productName});
    foundProduct.greet();
}

const findProductAndToggleOnSale = async (productName) => {             // přepnutí statusu konkrétní položky product modelu pomocí instance metody .toggleOnSale()
    const foundProduct = await Product.findOne({name: productName});
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
}

const findProductAndAddCategory = async(productName, category) => {
    const foundProduct = await Product.findOne({name: productName});
    console.log(foundProduct);
    await foundProduct.addCategory(category);
    console.log(foundProduct)
}

// využití static methods

Product.fireSale().then(res => console.log(res));
/// One to Many relation

const mongoose = require('mongoose');

const {Schema} = mongoose; // pro lepší přehlednost kódu si toto zavolám do proměnné a potom už všude volám jen to Schema

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
.then(() => {
    console.log('Spojení s databází navázáno :D');
})
.catch(err => {
    console.log('Při připojování k DB nastala někde chyba...');
    console.log(err);
});

// schema a model pro produkt

const prouductSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["Jaro", "Leto", "Podzim", "Zima"], // specifikace akceptovaných hodnot v položce
    }
});

const Product = mongoose.model("Product", prouductSchema);


// seeding kolekce products
/* Product.insertMany([
    {name: "Meloun", price: 24, season: "Leto"},
    {name: "Jablko", price: 16, season: "Podzim"},
    {name: "Mrkev", price: 20, season: "Jaro"},
]); */

// schema a model pro farmu

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{type: Schema.Types.ObjectId, ref: "Product"}],   // musím využít tzv. mongoose populate, specifikuju Schématu, že každá položka musí povinně být ObjectID a nic jiného
                                                 // typ specifikuju takto, jelikož není nativně v JS a je součástí mongoose
});

const Farm = mongoose.model("Farm", farmSchema);

// vytvoření farmy

const makeFarm = async () => {
    const farm = new Farm({name: "Testovaci farma", city: "Nachod", });
    const meloun = await Product.findOne({name: "Meloun"});
    farm.products.push(meloun); // i když se vypíše po provedení jako celý dokument, tak při kontrole v mongosh je tam jen opravdu ten ObjectID (díky tomu že je to specifikované ve schématu, tak si to při pushování vezme jen ID)
    await farm.save();
    console.log(farm);
};

// vytvoření nového produktu pro nějakou farmu

const addProduct = async (searchedFarm, searchedProduct) => {
    const farm = await Farm.findOne({name: searchedFarm});
    const product = await Product.findOne({name: searchedProduct});

    farm.products.push(product);
    farm.save()
    console.log(farm);
};

//addProduct("Testovaci farma", "Jablko");

// Ukázka Populate v mongoose (přidružení dat z jiné kolekce do výsledku dotazu z ObjectID, který je uložen v kolekci)

Farm.findOne({name: "Testovaci farma"})
.populate("products")
.then(farm => console.log(farm));
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
    name: {             // podrobnější definice vlastností položky, která bude tvořena přes toto schéma -> více než jen datový typ
        type: String,
        required: true,     // každá položka tvořená přes toto schéma musí povinně obsahovat name, jinak se vyskytne chyba
        maxLength: 20,      // omezije maximální počet položek ve Stringu na 20 WOW O_o
        
    },
    price: {            // jedná se tzv. SchemaType, který je definován jako objekt a může obsahovat více vlastností (tzv. schemaType options)
        type: Number,
        required: true,
        min: [0, "Cena musí být větší než 0!!!"],         // omezení nejnižší hodnoty // pomocí arraye mohu na 2. pozici umístit custom err message, pokud se nesplní tato konkrétní vlastnost při validaci
    },
    onSale: {
        type: Boolean,
        default: false,     // pokud není při tvorbě položky definováno onSale, bude defaultně nastaveno na false
    },
    categories: [String],   //well takto se prý specifikuje, že tato položka je array a datový typ hodnot arraye uvnitř...
    qty: {                  // pokud chci přidat objekt s dalšími pod-položkami, tak můžu je jednoduše přidat do objektu místo schematype options a vlastnosti položek definovat následně do nich
        online: {       
            type: Number,
            default: 0,
        },
        inStore: {          // položka v objektu (napřazené položce)
            type: Number,
            default: 0,
        }
    },
    size: {
        type: String,
        enum: acceptedSizes,    //zkontroluje jestlui se odesílanáí hodnota nachází v arrayi a pokud ne, tak vrátí chybu
    }
});

const Product = mongoose.model("Product", productSchema);


// const kolo = new Product({name: "Mountain bike", price: 5200, color: "red"}); // provede se, ale color se do DB neuloží, protože není definováno ve schématu
// const kolo = new Product({name: "Alibaba bike", price: "零零零零"}); // vrátí chybu, protože price je typu Number a ne String a nesplňuje validaci se schématem

const kolo = new Product({name: "Cyklistická bunda", price: 250, categories: ["Cyklistika", "Hory", "Oblečení"], size: "L"});

kolo.save()
.then(data => {
    console.log("OK");
    console.log(data)
})
.catch(err => {
    console.log("SHIT");
    console.log(err)    // vrátí pouze názvy chyb, nikoli celé error codes //err je objekt a obsahuje více dat
}) 


const findNupdate = () => {
    Product.findOneAndUpdate({name: "Bike Pump"}, {price: -10}, {returnDocument: "after", runValidators: true})
    .then(data => {
        console.log("OK");
        console.log(data)
    })
    .catch(err => {
        console.log("SHIT");
        console.log(err)
    })   
};
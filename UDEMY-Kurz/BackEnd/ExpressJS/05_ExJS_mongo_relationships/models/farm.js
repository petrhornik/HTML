// nový model pro dokumenty obsahující farmy

const mongoose = require("mongoose");
const {Schema} = mongoose;
const Product = require("./product");

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, "Farma musí mít název!"],
    },
    city: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "E-mail je vyžadován!"],
    },
    products: [ // renference na prodkuty pomocí one to many relation
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        }
    ]
});

// definování middleware pro smazání všech child elementů pro farmu

/* 

farmSchema.pre("findOneAndDelete", async function () {    // schématu přidávám midleware co se provede vždy před zavoláním konkrétní fce. z modelu využívajícího toto schéma (zde konkrétně findOneAndDetele/findByIdAndDelete)
    console.log("provedlo se před requestem!")
});

farmSchema.post("findOneAndDelete", async function (data) {   // to samé ale po provedení requestu
    console.log(data)
    console.log("Provedlo se po requestu!")
}); 

*/

farmSchema.post("findOneAndDelete", async function (farm) {
    if (farm.products.length > 0){
        const response = await Product.deleteMany({_id: {$in: farm.products}})
        console.log(response);
    }
})

const Farm = mongoose.model("farm", farmSchema);   // operátor $in zjišťuje jestli _id produktu není obsaženo v products arrayi v dokumentu smazané farmy

module.exports = Farm;
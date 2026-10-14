// nový model pro dokumenty obsahující farmy

const mongoose = require("mongoose");
const {Schema} = mongoose;

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

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
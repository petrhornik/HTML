//ukázka použití loopu společne s arrayem

const Array = [
    "Skoda",
    "Fiat",
    "Kia",
    "Nissan",
    "BMW",
    "Wolkswagen",
    "Opel",
    "Xiaomi",
    "Avatr(Huawei)",
    "Nio",
    "DongFeng",
]


//od začátku do konce

for(i = 0; i < Array.length; i++){
    console.log(i, Array[i]); //postupně se vypíšou všechny položky v arrayi s jejich pořadími
};

console.log("");

//od konce do začátku

for(i = Array.length -1; i >= 0; i--){
    console.log(i, Array[i]);
};
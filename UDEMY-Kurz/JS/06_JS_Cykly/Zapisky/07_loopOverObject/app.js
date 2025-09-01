// loopování skrze položky v objektu

const Objekt = {
    Ivan: 78,
    Tux: 95,
    Arnold: 49,
    Xi_Ping: 68,
    Marlon: 86,
    Adam: 37,
    Domino: 52,
    Tomas: 81,
    Nevim: 34,
    Gabe: 99,
};

// pomocí cyklu for...in

for (person in Objekt){
    console.log(`Student ${person} dosáhl skóre ${Objekt[person]}`);
};

console.log("\n")

// Object.keys();

const keyVal = Object.keys(Objekt);
console.log(keyVal);


console.log("\n")

// kombinace Object.value(); a for...of

let celkemSkore = 0;
let scores = Object.values(Objekt);
for(skore of scores){
    celkemSkore += skore;   // vypočtení celkového skóre všech studentů(hodnot)
};

console.log(`Skóre všech studentů dohromady je: ${celkemSkore}`);
console.log(`Průměrné skóre je: ${celkemSkore / scores.length}`);
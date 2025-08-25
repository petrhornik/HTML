const famousCats = ["Blue", "Mickey", "Pop", "Keyboard", "Bongo"]

const famousDogs = ["Gabe", "Doge", "WhatTheDog"]

//spojení arrayů (concat)

const famAnimals = famousCats.concat(famousDogs);

console.log(famAnimals);

//vyhledávání konkrétní hodnoty

let boolean = famAnimals.includes("Gabe");

console.log(boolean);

// vyhledání pozice (indexu)

let pozice = famAnimals.indexOf("Doge");

console.log("Index Doge je: ", pozice);

// obrácení (reverse) arraye, mutuje array!!!

famousCats.reverse();

console.log(famousCats);

// vymezení arraye (slice)

const vymezeni = famAnimals.slice(1, 4);
const vymezeniStart = famAnimals.slice(2);

console.log(vymezeni);
console.log(vymezeniStart);

// smazání části arraye či nahrazení, mutuje array!!!
famousCats.reverse();


famousCats.splice(1, 2)
famAnimals.splice(1, 4, "Hello", "HI"); //smaže index 1 + další 3 hodnoty a nahradí těmito hodnotami
famousDogs.splice(1, 0, "Bert", "Scooby", "Bluey");

console.log(famousCats)
console.log(famAnimals)
console.log(famousDogs)

// třídění s prázdnými () -> sort

const skore = [1, 70, 100, 2500, 9, -12, 0, 34];

//pořadí bude -12, 0, 1, 100, 2500, 34, 70, 9 -> protože: -, 0, 1, 1->0 (více hodnot), 2, 3, 7, 9 

const sorted = skore.sort();

console.log(sorted);
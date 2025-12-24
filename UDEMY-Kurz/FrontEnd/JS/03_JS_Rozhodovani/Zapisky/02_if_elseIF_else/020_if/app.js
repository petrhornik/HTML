let hodnoceni = 3;

if (hodnoceni === 3){
    console.log("Hodnoceni je 3"); // toto se provede pokud je podminka v () true
};

console.log("------------------------------")

console.log("před if podminkou") // není součásti if -> vypíše se vždy

if (1 + 1 === 2){
    console.log("Math is still mathing :D")
};

console.log("za if podminkou")

console.log("------------------------------")

let nahoda = Math.random();

if (nahoda < 0.5){
    console.log("Náhodné čislo se menší než 0.5")
}

if (nahoda > 0.5){
    console.log("Náhodné čislo se větší než 0.5")
}

console.log("------------------------------")


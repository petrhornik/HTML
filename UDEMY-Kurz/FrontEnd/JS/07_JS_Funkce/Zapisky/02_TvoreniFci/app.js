// tvorba funkce

// #1 definování - toto se samo od sebe nespustí!!

povidani(); //toto NEDĚLAT!! -> ale je to funkční

function povidani(){
    console.log("Ja te vidim ty zmr**")
    console.log("NESCROLLUJ SHORTY")
    console.log("Uč se web development!")
};

// #2 volání

povidani(); //funkce se provede až se kód dostane na tento řádek

povidani(); //fce můžu volat kamkoli a kolikrát chci
povidani(); // volání by vždy mělo probíhat JEN po definici, ale because of JS to jde i před definiucí


console.log("\n");

// přidání argumentů

function pozdrav(firstName){ // vytvoření argumentu firstName
    console.log(`input firstName je: ${firstName}`);
};

pozdrav("Adam"); // "Adam" se nastaví jako hodnota inputu firstName


console.log("\n");

// více argumentů

function personName(fName, lName){
    console.log(`Jmenuji se ${fName} ${lName}!`);
};

personName("Adam", "Kuhn"); //pozor na pořadí hodnot


console.log("\n")

function repeat(text, num){
    opak = "";
    for(let i = 0; i < num; i++){
        opak += text
    };
    console.log(opak);
};

repeat("JavaScript", 5) //hodnoty vyplněvat ve správném pořadí


console.log("\n");

// return keyword

function soucet(x, y){
    return x + y;
    console.log("Toto se nikdy neprovede!");
};

let vysledek = soucet(2, 5);

console.log(vysledek);

function soucetSoverenim(x, y){
    if(typeof x !== "number" || typeof y !== "number"){
        return false;
    }
    let sum = x + y;
    return sum;
}

console.log(soucetSoverenim(4, 24));
console.log(soucetSoverenim("soucet", 10));
console.log(soucetSoverenim(soucetSoverenim(4, 5), 10)); //lze vnořovat fce. tímto zp.


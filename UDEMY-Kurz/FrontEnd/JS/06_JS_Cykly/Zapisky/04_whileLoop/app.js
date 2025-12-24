// ukázka while loop


// v topto případě by se spíš použil for ale hej!
let count = 0;

while (count < 10){ //počet opakování už se nepočítá, hraje se jen na splnění podmínky
    console.log(count);
    count++;
};

//actually kinda praktická ukázka

const heslo = "iLikeTurtles";

let pokus = prompt("Zadejte heslo!");

while (pokus !== heslo){ //bude se opakovat dokud si hodnoty nebudou rovny
    pokus = prompt("Zadejte heslo znovu!");
};

console.log("Well, you did it!")
const cislo = prompt("Zadej číslo: ");

if (cislo < 20 && cislo > 5){ // oba výrazy musí být splněny
    console.log("podminka AND byla splněna!")
} else{
    console.log("1 či oba výrazy nebyly splněny!")
}

console.log("---------------------------------------------")

const heslo = prompt("prosím zadejte heslo")

if(heslo.length > 6 && heslo.indexOf(" ") === -1) {
   console.log("Validace úspěšná!")
} else{
    console.log("Validace není splněna!!!")
}
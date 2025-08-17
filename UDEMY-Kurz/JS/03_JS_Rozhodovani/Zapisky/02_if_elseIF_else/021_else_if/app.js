let hodnoceni = 2;

if (hodnoceni === 3){
    console.log("Hodnoceni je 3");
}else if (hodnoceni === 2){
    console.log("Hodnoceni je 2");
};

console.log("------------------------------")

const denVtydnu = "Sobota";

if (denVtydnu === "Pondeli"){
    console.log("Vybraný den je Pondělí.")
}else if(denVtydnu === "Sobota"){
    console.log("Je sobota, mám volno :D")
}else if (denVtydnu === "Pátek"){
    console.log("Pátky jsou ok po práci :DD")
};

console.log("------------------------------")

const vek = 40;

if (vek < 5){
    console.log("Pro mimina vstup zdarma!")
}else if (vek < 10){
    console.log("Jsi dítě, zaplať 100Kč!")
} else if (vek < 65){
    console.log("Pro dospělé vstup za 200kč!")
} else if(vek >= 65){
    console.log("Pro seniory vstup zdarma :D")
}
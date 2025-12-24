// měnění stylu pomocí JS

const nadpis = document.querySelector("h1");

nadpis.style.color = "red"; // změní styl barvy pozadí

nadpis.style.fontSize = "80px"; //zvětšení textu
// pro více slov se musí použít camelCasing

nadpis.style.border = "2px solid pink";

// #2

const vsechnyAnchory = document.querySelectorAll("a");

for(let anchor of vsechnyAnchory){
    anchor.style.color = "green";
    anchor.style.textDecorationColor = "yellow";
    anchor.style.textDecorationStyle = "wavy";
};

// zjištění aplikovaných stylů na tag pomocí JS



console.log(window.getComputedStyle(nadpis));
    // vypíše veškerou aplikovanou stylizaci na selektovaný tag

console.log(window.getComputedStyle(nadpis).fontSize);
console.log(window.getComputedStyle(nadpis).fontFamily);
console.log(window.getComputedStyle(nadpis).margin);
    // lze si zobrazit i konkrétní položky v objektu


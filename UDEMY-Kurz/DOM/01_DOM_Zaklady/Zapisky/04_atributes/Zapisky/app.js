// Atributes

// #1 - dotNotation
const nadpis = document.querySelector("h1");

nadpis.id = "LOL";
// pomocí dotNotation se dá přistupovat a manipulovat s atributy html tagů

const prvObrazek = document.querySelector("img");

prvObrazek.src = "img/pic.png";

// #2 - getAttribute()

console.log(prvObrazek.src); // vypíše celou cestu v OS k souboru

console.log(prvObrazek.getAttribute("src")); // vypíše jen to co je specifikováno v atributu v tagu

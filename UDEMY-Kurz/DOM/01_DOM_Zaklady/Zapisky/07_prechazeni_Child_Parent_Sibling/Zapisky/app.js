
// #1 přístup k parent elementu
const firstBoldTag = document.querySelector("b"); //vyberu např 1. bold tag z celého .html

console.log(firstBoldTag);

const firstBoldTagParent = firstBoldTag.parentElement; // přesměrování na parent odkazovaného elementu

console.log(firstBoldTagParent); // vypíše se nadřazený HTML element s jeho obsahem

// #2 přístup k child elementu

// zjištění počtu a typu child elementů umístěných v urč. elementu

const paragraf = firstBoldTag.parentElement;

console.log(paragraf.children); // vypíše pořet a array tagů (DOM objektů) obsažených v parentu

paragraf.children[2].innerHTML = "Změna obsahu child elementu";
    //takto lze měnit child elementy v parentu

// #3 sibling elements

const imageChicken = document.querySelector(".square"); // 1. obrazek s class .suqare

console.log(imageChicken.nextSibling); // bude odkazovat na nejbližší spjatý element dle NODE
    // odkazuje na oddělovací řádek pod obrázkem (USELESS...)

console.log(imageChicken.nextElementSibling); // vypíše další element z hlediska HTML
console.log(imageChicken.previousElementSibling.previousElementSibling); //lze stackovat
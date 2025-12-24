// mazání elementů z HTML pomocí JS

// #1 - pomocí .removeChild

const firstLI = document.querySelector("li");

const UL = firstLI.parentElement; // abych mohl li smazat musím si určit jeho rodiče jako target atributu

UL.removeChild(firstLI); // smaže child z parenta

// narvat do 1 řádku

const firstB = document.querySelector("b");

firstB.parentElement.removeChild(firstB) // kratší, rychlejší, efektivnější

// #2 .remove

const firstIMG = document.querySelector("img");

firstIMG.remove(); // smaže přímo odkazovaný element bez nutnosti rodiče (parenta)
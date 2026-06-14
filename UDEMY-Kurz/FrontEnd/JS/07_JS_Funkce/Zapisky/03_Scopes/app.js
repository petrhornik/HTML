// ukázka Scope ("dostupnost" prom.)

// #1 function scope

function collectEggs() {
  let totalEggs = 6; //prom. uvnitř fce, dá se na ni odkázat jen přikazy přímo v této fci
  console.log(totalEggs); //přistupujeme stále uvnitř fce. -> toto je OK
}

collectEggs();

// console.log(totalEggs); // <-
//NEBUDE fungovat, console.log se nachází přimo v "globálním" kódu souboru,
// eg. proměnnou hledá na stejném "levelu", eg. proměnné jakkoli vnořené NEVIDÍ

// VScode nás NEUPOZORNÍ NA CHYBU, ale browser už ano

console.log("\n");

// spravne reseni

let soFarEggs = 4; //prom. definujeme "globálně"

function eggGame() {
  soFarEggs = 6;
  console.log(soFarEggs);
}

console.log(soFarEggs); //zde se ještě zachová 4 -> fce. ještě nebyla zavolána

eggGame();

console.log(soFarEggs);

// další příklad

let bird = "Straka Obecna"; // definování "globální" prom.
function birdWatch() {
  let bird = "Slepice voe"; // definování nové prom. uvnitř fce. (můze mít stejný název jelikož kromě fce. ji nic "nevidí" -> duplicita NEVZNIKNE)
  console.log(bird); //interaguju s prom. ve fci, kdyby lze nebyla bude se interagovat s "globální" stejného názvu
}

birdWatch();
console.log(bird); // funkce vytváři novou prom. co lze použít jen vně, eg. nemá vliv na tu "globální"

// #2 block scope

let radius = 8;
if (radius > 0) {
  const PI = Math.PI; // vnořené prom., lze přistupovat jen v rámci tohoto if
  let msg = "HI!";
}

console.log(radius);
//console.log(msg); //nebude fungovat

// příklad s for

for (var i = 0; i < 5; i++) {
  let msg = "for loop"; // lze přistupovat jen uvnitř loopu (blocku)
  var msgNew = "lze přistupovat";
  console.log(msgNew);
}

console.log(msgNew); // díky var lze přistupovat k prom. vnóřených do bloků i mimo ně

console.log(i); //pokud použiju var v loopu tak potom lze přistupovat k POSLEDNÍ uložené hodnotě only...

// #3 lexical scope

function popularBrands() {
  const brands = ["Samsung", "Xiaomi", "Apple", "Huawei"];
  function buyerThoughts() {
    function inner() {
      for (let brand of brands) {
        console.log(`Mám si koupit...${brand}?`); // bude se dohledávat prom. brand, bude se stoupat od vnoření nahoru postupně až do "global" kódu a využije se 1. prom. s tímto názvem ať už je kdekoli
      }
    }
    inner();
  }
  buyerThoughts(); // musíme call, aby se vnořená fce. po zavolání parenta spustila
}

popularBrands(); // spustí pouze "parent" fci, zbytek se pouští JEN pomocí callů uvnitř fce.

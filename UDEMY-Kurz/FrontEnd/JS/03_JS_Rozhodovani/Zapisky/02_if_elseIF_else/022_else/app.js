let hodnoceni = -99;

if (hodnoceni === 3) {
  console.log("Hodnoceni je 3");
} else if (hodnoceni === 2) {
  console.log("Hodnoceni je 2");
} else {
  console.log("Toto hodnocení není platné!");
}

console.log("------------------------------");

const denVtydnu = prompt("Zadej den").toLocaleLowerCase();

if (denVtydnu === "pondělí") {
  console.log("Vybraný den je Pondělí.");
} else if (denVtydnu === "sobota") {
  console.log("Je sobota, mám volno :D");
} else if (denVtydnu === "pátek") {
  console.log("Pátky jsou ok po práci :DD");
} else {
  console.log("Ostatní dny jsou OK....");
}

console.log("------------------------------");

let nahoda = Math.random();

if (nahoda < 0.5) {
  console.log("Náhodné čislo se menší než 0.5");
} else {
  console.log("Náhodné čislo se větší než 0.5");
}
console.log(nahoda);

console.log("------------------------------");

const vek = 145;

if (vek < 5) {
  console.log("Pro mimina vstup zdarma!");
} else if (vek < 10) {
  console.log("Jsi dítě, zaplať 100Kč!");
} else if (vek < 65) {
  console.log("Pro dospělé vstup za 200kč!");
} else {
  console.log("Pro seniory vstup zdarma :D");
}

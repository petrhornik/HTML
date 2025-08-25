const colors = []; //tvorba arraye

const days = ["Pondělí", "Úterý", "Středa"]; //ukázka položek

const random = [true, undefined, 12, 9.99999, NaN, false, null, "BRUH"]; // lze kombinovat všechny datové typy

console.log(days[1]); //vypsání položky v console

// bracket nbtation chaining

const doubleArr =["hi", "nihao", "halo", ["bye", "idk", "nevim"]];

console.log(doubleArr[3][1]) //odkaz na položku v arrayi V ARRAYI

// přidání/změna hodnoty

const wrongArr = ["aUto", "AuTobas"]

wrongArr[0] = "auto"; //úprava hodnoty
wrongArr[1] = "autobus";
wrongArr[2] = "letadlo"; //přidání hodnoty

console.log(wrongArr);

wrongArr[1] = 1234;

console.log(wrongArr);

// přidání hodnoty s vynecháním indexu/ů

wrongArr[20] = "daleko";

console.log(wrongArr);
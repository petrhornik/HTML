// ukázka rest

// problém s arguments objektem
function sum() {
  return arguments.reduce((total, num) => total + num);
}

// console.log(sum(1, 23, 234, 43, 23)); // nebude fungovat jelikož arguments není array

// #2 rest

function newSum(...nums) {
  // ze všech passovaných hodnot vytvoří array pod prop. nums
  return nums.reduce((total, num) => total + num);
}

console.log(newSum(1, 23, 234, 43, 23));

// more rest

function vysledky(zlato, stribro, ...ostatní) {
  console.log(`Zlato vyhrává ${zlato}, gratulujeme!!!`);
  console.log(`Stříbro vyhrává ${stribro}, dobrá práce!!!`);
  console.log(`Děkujeme za účast: ${ostatní}`);
}

vysledky("Láďa", "Jiří", "Heřman", "Luděk", "Pepa", "Černoch");

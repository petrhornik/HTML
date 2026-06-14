// JS FUNKCE - rozebereme podrobně dále

function hodKostkou(strany) {
  //definuji si prom. se kterou v kódu pracuji
  return Math.floor(Math.random() * strany + 1);
}

let kostka1 = hodKostkou(20); //tímto stylem si do prom. dosadím hodnotu
let kostka2 = hodKostkou(30); //přivolání funkce

console.log(kostka1);
console.log(kostka2);

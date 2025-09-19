// ukázka default params

function rollDie(numSides) {
  return Math.floor(Math.random() * numSides + 1);
}

console.log(rollDie());

// #1 - starý způsob

function rollDieOLD(numSides) {
  if (numSides === undefined) {
    numSides = 6; // pokud je numSides rovno undefined tak se hodnota nastaví na 6
  }
  return Math.floor(Math.random() * numSides + 1);
}

console.log(rollDieOLD());

// #2 - nový způsob

function rollDieNEW(numSides = 6) {
  // definuje se přímo u prom. pro passovanou hodnotu
  return Math.floor(Math.random() * numSides + 1);
}

console.log(rollDieNEW());

// další ukázky

function greet(msg = "Hey there", name = "John Doe", znak = "!") {
  return `${msg}, ${name}${znak}`;
}

console.log(greet("Hello", "Emma"));
console.log(greet("Hello")); // v tuto chvíli bude 2 hodnota undefined
console.log(greet("Jack")); //musím dávat pozor na pořadí passování
// "Jack" se bude passovat jako msg a name bude undefined/default-val !

console.log(greet("Howdy", "Jeremy Clarkson", "!!!"));

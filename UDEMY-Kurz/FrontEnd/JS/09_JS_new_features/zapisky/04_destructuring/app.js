// destructuring

// #1 - array
const skore = [67877689, 4568790, 2347908, 8904566, 34567898, 3456798];

const [cislo1, cislo2, cislo3, ...zbytek] = skore;

console.log(cislo1);
console.log(cislo3);
console.log(zbytek);

// #2 - objekt

const user = {
  email: "examplemail@mail.ex",
  password: "heslo123",
  fName: "Steven",
  lName: "Spielberg",
  born: 1940,
  died: false,
  Country: "USA",
};

const { email, Country, lName, password: magicWord, neexistuje } = user; //názvy se musí shodovat s key-valy

console.log(email); //názvy key-valů jsou názvy proměnných
console.log(Country);
console.log(lName);

console.log(magicWord); // proměnná se změněným názvem
console.log(neexistuje); // odkaz na neexistující key-val

// #3 - params

function fullName({ fName, lName = "Doe" }) {
  return `${fName} ${lName}`;
}

console.log(fullName(user));

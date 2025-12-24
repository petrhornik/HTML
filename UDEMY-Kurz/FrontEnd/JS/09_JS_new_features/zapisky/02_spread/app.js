// ukázka spread - array

nums = [12, 34, 21, 43, 54, 2, 65, 78, 6];

const min = Math.min(...nums); // passují se hodnoty nikoli array jako takový
const max = Math.max(...nums);

console.log(min, max);
console.log(...nums); // vypíše se řetězec hodnot

// #2 - string

const text = "hello";
console.log(...text); // string se rozdělí na jednotlivé znaky

console.log("\n");

// spread s arr. literáty

const auta = ["Audi", "BMW", "Skoda", "Xiaomi"];
const motorky = ["Jawa", "Yamaha", "Kawasaki", "Honda"];

const vozidla = [...auta, ...motorky, "Boeing", "AirBus", "Embraer"]; //lze přidat i další nové hodnoty

console.log(vozidla);

// #2 - string

const textChars = [..."hello"]; // rozdělí se na jednotlivé znaky
console.log(textChars);

console.log("\n");

// spread s objekty

const Xiaomi = { model: "SU7", power: 220, range: 700 };

const XiaomiMore = { ...Xiaomi, type: "electric" }; // přidáme nevou key-val s hodnotou

console.log(XiaomiMore);

const Tesla = { model: "Y", companyOwner: "E. Musk", controversy: true };

const newCar = { ...Xiaomi, ...Tesla };

console.log(newCar);
// model hodnotu nám spread tesly přepíše protože se volá až po
// dokončení spreadu Xiaomi

console.log("\n");

// spread arraye do objektu

const ObjOfArr = { ...[1, 23, 43, 321] };

console.log(ObjOfArr);

// další ukazka

const dataZformu = {
  email: "examplemail@mail.ex",
  username: "JohnDoe",
  age: 23,
};

const profileUpdare = {
  ...dataZformu,
  password: "user123",
  isAdmin: false,
};

console.log(profileUpdare); // původní objekt NEMUTUJE, vytvoří se nový

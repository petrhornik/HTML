//ukázka objektu

const objekt = {
    prvni_polozka: "Ahoj",
    prvniDojmy: "Bude se hodit pro TVui :D"
};

console.log(objekt.prvniDojmy);

// jak tvořit objekty?

const promenna_objektu = {

    key_value: "hodnota",
    key_dalsiPolozky: 606,
    muzuJitSpat: false,
    musimMakat: [true, 1],

};

console.log(promenna_objektu)

//přistupování k objektu

// 1) bracket notation
console.log(promenna_objektu["key_dalsiPolozky"]); // v [] se obkazuji na hodnotu v objektu

// 2) dot notation
console.log(promenna_objektu.muzuJitSpat);

const roky = {1999: "Nežil jsem :DD", 2017: "Nejlepší období IMO", null: "nenalezeno"};

// fun - zkus si napsat roky. a dej TAB na jedné z možností -> automaticky se převede na bracketNot.
console.log(roky[1999])

let promenny_odkaz = 2017;

console.log(roky[promenny_odkaz]);




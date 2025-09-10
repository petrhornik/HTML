// metody

const mujObjekt = { //objekt obsahující metody
    PI: Math.PI,
    ctverec: function(num){ //fce v obj. => metoda
        return num*num;
    },
    kostka(num){
        return num**3;
    },
};

//dot notation
console.log(mujObjekt.ctverec(4));
console.log(mujObjekt.kostka(4));

//bracket notation - kinda prehlednejsi s dark VS2022 theme
console.log(mujObjekt["ctverec"](2));
console.log(mujObjekt["kostka"](2));

// zkrácené definování

const zkracenyZapis = {
    obdelnik(a, b){ //zjednodušený zápis
        return a*b;
    },
    kruh(a){
        return Math.floor(2 * Math.PI * (a ** 2) * 100) / 100;
    }
};

console.log(zkracenyZapis.obdelnik(3,2));
console.log(zkracenyZapis["kruh"](2));
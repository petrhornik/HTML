// ukázka this

const cat = {
    name: "CaseOh KITTYYY",
    color: "Black",
    breed: "unknown",
    meow(){ // odkazujeme na hodnoty uvnitř tohoto objektu
        console.log(`${this.name} je kočka barvy ${this.color}, plemena ${this.breed}`);
    },
};

cat.meow(); // spustí se prv

const meow2 = cat.meow; // uloží se fce. -> už se nebude provádět v objektu ale v "global" kódu

meow2(); // snaží se najít hodnoty v rámci "globálního" kódu

// metody window objekt

function Hi(){
    console.log("Hello :3");
}

window.Hi();
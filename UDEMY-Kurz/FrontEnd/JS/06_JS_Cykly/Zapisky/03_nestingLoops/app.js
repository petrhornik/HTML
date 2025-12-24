// ukázka nestování loopu v loopu

for (let i = 1; i <= 10; i++){
    console.log(`i má hodnotu ${i}`);
    for (let j = 1; j < 4; j++){ //provede se pří každém opak. "parent" foru
        console.log(`Uvnitř vnořeného for, hodnota j je ${j}`)
    };
}

// praktická ukázka

const zasedaciPoradek = [
    ["Jiří", "Tomáš", "Adam"],
    ["John", "Amy", "Henry", "Joseph"],
    ["Frank", "Ivan", "Erika", "Bob"],
];

for (let i = 0; i < zasedaciPoradek.length; i++){
    console.log(`Řada č. ${i + 1}`)
    for(let j = 0; j < zasedaciPoradek[i].length; j++){
        console.log(zasedaciPoradek[i][j]); // i představuje položku main arraye (1 z arrayů vložených), j představuje konkrétní poiložku v konkrétním arrayi
    };
};
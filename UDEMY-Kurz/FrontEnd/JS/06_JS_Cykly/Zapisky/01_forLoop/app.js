// ukázka for loop

// #1 no loop

console.log("LOOPING");
console.log("LOOPING");
console.log("LOOPING");
console.log("LOOPING");
console.log("LOOPING");
console.log("LOOPING");
console.log("LOOPING");
console.log("LOOPING");
console.log("LOOPING");
console.log("LOOPING");
console.log("LOOPING");


console.log("------------------------");

// #2 for loop

for (let i = 1; i <= 10; i++){ // mám novou prom. i, která se bude po každém provedení cyklu inkrementovat, cykl se bude provádět dokud bude po každém jeho zkončení podmínka stále platná (v našem případě i <= 10)
    console.log(`Loop se opakuje po ${i}`);
    console.log("LOOPING. Toto je uvnitř loopu");
};

//víc loopů for

for (let j = 0; j <= 20; j += 2){
    console.log(j) //jen sudá čísla
};

console.log("");

for (let k = 100; k >= 0; k -= 10){
    console.log(k); //od 100 dolů po desítkách
};

console.log("");

for (let m = 1; m <= 1000; m *= 10){
    console.log(m); //od 100 dolů po desítkách
};

// #3 infinite loop - NOT GUT!!!!!!
//pokud není nutno nezpouštět

/*
for (let i = 1; i >= 0; i++) {
    console.log("Čas zasekat prohlížeč HEHEHEHEHEHE!!")
};
*/
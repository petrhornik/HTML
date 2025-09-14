// ukázka setTimeout

setTimeout(() => {
    console.log("HELLLOOOO!!!")
}, 3000); // počká se 3000ms -> 3s a poté se spustí obsažená fce.

console.log("NOPE!"); // spustí se hned

//ukázka setInterval

const id = setInterval(() => { // id bude uloženo v proměnné a iterval se bude opakovat dokud se toto id nezavolá fcí. cleanInterval
    console.log(Math.random() * 10)
}, 1000)

clearInterval(id); //např. se bude polot pomocí tlačítka v ui
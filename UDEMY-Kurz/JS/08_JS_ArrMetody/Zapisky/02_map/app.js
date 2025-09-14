// ukázka map 

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const doubles = numbers.map(function(val){ // celé uložíme do nové proměnné
    return val * 2;                        // pomocí té budeme volat nový array
})

console.log(doubles);

console.log("\n");

// #2

const MovList = [
    {
        title: "Jehovova Pomsta",
        score: 60,
    },
    {
        title: "Babovřesky",
        score: 34,
    },
    {
        title: "Slunce, Seno, ...",
        score: 51,
    },
    {
        title: "2:22",
        score: 23,
    },
];

const titles = MovList.map(function(val){
    return val.title.toUpperCase(); //vrátí nám array obsahgující upperCase title hodnoty
});

console.log(titles);
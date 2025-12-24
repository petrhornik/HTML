const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

function print(element){
    console.log(element);
};

numbers.forEach(print); // fce. print se provede pro všechny položky v arrayi


console.log("\n")

// #2 - fce. přímo v ()

numbers.forEach(function(val){ // funkce je definována přímo uvnitř () -> common praktika
    if(val % 2 === 0){
        console.log(val);
    }
})

// #3 forEach a objekt

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
]

MovList.forEach(function(val){
    console.log(val.title, "-", val.score); //za val se vždy dosadí objekt 
});
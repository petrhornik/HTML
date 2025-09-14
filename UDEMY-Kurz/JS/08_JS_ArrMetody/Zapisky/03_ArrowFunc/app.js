// ukázka arrow fcí

const add = (x, y) => { //kompaktnější než klas. syntax
    return x + y;
};

console.log(add(4, 6)); //funguje úplně stejně :D

// #2

const ObsCtverec = (a) => {
    return a*a;
};

console.log(ObsCtverec(6));

// #3

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1; 
};

console.log(rollDie());

// kombinace s map a forEach

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
        score: 72,
    },
];

const newMovList = MovList.map((movie) => {
    return `${movie.title} - ${movie.score / 10}`;
});

console.log(newMovList);

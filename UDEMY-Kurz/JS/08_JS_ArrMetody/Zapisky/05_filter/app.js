// ukázka .filter

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const filterNums = numbers.filter((num) => {
    return num % 2 === 0; //pouze sudá čísla
});

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
        score: 53,
    },
];

const gutMovs = MovList.filter((mov) => mov.score > 45);
    // inline arrow fce....
const gutTitles = gutMovs.map((mov) => mov.title);

    
const notGutMovs = MovList.filter((mov) => mov.score < 45);


// pomocí dotNotation lze zkombinovat více motod dohromady
const gutTitlesInline = MovList.filter((mov) => mov.score > 45).map((mov) => mov.title);
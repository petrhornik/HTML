// ukázka reduce

const cenyArr = [9.99, 1.5, 19.99, 49.99, 30.5];

const celkem = cenyArr.reduce((sum, cena) => {
  return sum + cena;
});

console.log(celkem);

// funguje vlastně jako celkem += cena uvnitř for loopu....

// #2 - chceme nejmenší hodnotu z arraye

const minCena = cenyArr.reduce((min, cena) => {
  if (min < cena) {
    return min;
  } else {
    return cena;
  }
});

console.log(minCena);

// #3 - kombinace s objekty

const MovList = [
  {
    title: "Jehovova Pomsta",
    score: 10,
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

const bestMov = MovList.reduce((nejvyssiHodnoceni, curVal) => {
  if (nejvyssiHodnoceni.score < curVal.score) {
    return curVal;
  } else {
    return nejvyssiHodnoceni;
  }
}); // vlastní hodnota by se specifikovala sem za } po přídání ,

console.log(bestMov);

// #4 - specifikace startovního bodu pro accumulator

const sude = [2, 4, 6, 8];
const sudeSoucet = sude.reduce((sum, num) => sum + num, 100);

console.log(sudeSoucet);

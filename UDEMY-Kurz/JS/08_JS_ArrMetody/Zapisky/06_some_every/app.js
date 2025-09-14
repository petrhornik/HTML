// ukázka every a some

const zkousky = [80,98,92,78,77,90,89,70,81,77];


// všechny položky musí splňovat podmínku
const vysledekAll = zkousky.every((score) => score >= 75);

// alespoň 1 položka musí splňovat podmínku
const proselNekdo = zkousky.some((score) => score >= 75);


console.log(vysledekAll);
console.log(proselNekdo);


const allEvents = (nums) => {
  const validation = nums.every((num) => {
    return num % 2 === 0
});
  return validation;
};


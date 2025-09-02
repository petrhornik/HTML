// Write a function called sumArray which accepts 
// a single argument: an array of numbers.  
// It should return the sum of all the numbers in the array.

// Hints:

// You'll need a variable to keep track of the total.  
// It should start out as zero.

// Loop over the array and for each element, 
// add it to the total variable.

// After you have added every number to total, return total.

function sumArray(array){
  let total = 0;
  for(let i = 0; i < array.length; i++){
    total += array[i];  
  };
  return total;
};

sumArray([1,2,3])
sumArray([2,2,2,2])
sumArray([50,50,1])
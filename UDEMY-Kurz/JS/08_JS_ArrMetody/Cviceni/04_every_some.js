// Define a function called allEvens that accepts a single array of numbers.  
// If the array contains all even numbers, return true.  Otherwise, return false.  
// Use some or every to help you do this!  
// (only one of them is actually useful here)

function allEvens(nums){
    const validation = nums.every((num) => {return num % 2 === 0});
    return validation;
};

allEvens([2, 4, 6, 8]); //true
allEvens([2, 4, 6, 7]); //false
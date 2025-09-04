// It's time to practice returning values from a function! 
// Write a simple function multiply which accepts two numerical arguments and 
// returns their product (multiply them together).  
// Make sure to return the value instead of printing it!

function multiply(x, y){
  if(typeof x !== "number" || typeof y !== "number"){
    console.log("Neplatná hodnota!!")
    return false;  
  };
  return x * y;  
};

multiply(2,3)
multiply(9,9)
multiply(5,4)
// In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  
// It's generally not a good roll.  
// Please write a function called isSnakeEyes, which accepts two numbers as inputs, 
// representing two dice. If the two numbers are both 1's, 
// please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

function isSnakeEyes(num1, num2){
    if(parseInt(num1) === NaN || parseInt(num2) === NaN){
        console.log("Jedna či obě hodnoty nejsou číselné!")
    }else if(num1 === 1 && num2 === 1){
        console.log("Snake Eyes!")
    }else{
        console.log("Not Snake Eyes!")
    }
};

isSnakeEyes(1,1)
isSnakeEyes(1,5)
isSnakeEyes(4,5)
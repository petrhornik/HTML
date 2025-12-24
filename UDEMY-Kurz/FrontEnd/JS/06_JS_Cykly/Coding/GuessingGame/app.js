//myCODE

let max = parseInt(prompt("Zadej maximální číslo hádanky!"));

while(!max){
    max = parseInt(prompt("Neplatný vstup! Zkus to znovu!!"));
}
console.log(max);
const randomNum = Math.floor(Math.random() * max + 1);
console.log(randomNum);

let guess = prompt("Hádej nebo ukonč pomocí 'q'");
let pokusy = 0;

while (parseInt(guess) !== randomNum){
    if(guess === "q"){
        console.log("BOOOOOO")
        break;
    } else if (parseInt(guess) < randomNum){
        guess = prompt("Hledané číslo je větší! nebo ukonč pomocí 'q'");
        pokusy++;
    } else if (parseInt(guess) > randomNum){
        guess = prompt("Hledané číslo je menší! nebo ukonč pomocí 'q'");
        pokusy++;
    } else{
        guess = prompt("Neplatný vstup, zkus to znovu! nebo ukonč pomocí 'q'");
    }
    
}

if(parseInt(guess) === randomNum){
    console.log("Gratuluji");
    console.log(`Zabralo ti to ${pokusy} pokusů!`)
}

console.log("Konec programu!")


let jmeno = prompt("Prosím zadejte vaše jméno: ")

if(!jmeno){ //v tuto chvíli to funguje stejně jako jmeno === ""
    // loopování prej zatím ne :D
    /*while (!jmeno){
        jmeno = prompt("Prosím zkuste to znovu!");
        if (jmeno){
            console.log("Dekuji!");
            break;
        }
    }*/
   jmeno = prompt("Prosím zkuste to znovu!");
} else{
    console.log("Děkuji! :D")
}

console.log("--------------------------------------")

const vek = prompt("Zadej svůj věk: ")

if(!(vek >= 0 && vek < 5 || vek >= 65)){
    console.log("Nejste dítě ani senior!");
}
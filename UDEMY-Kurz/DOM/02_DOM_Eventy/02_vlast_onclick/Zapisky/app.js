// přidání eventu skrze JS

const btn = document.querySelector('#v2');

btn.onclick = function (){
    console.log("Zmáčkl jsi tlačítko!"); // event onclick definovaný přimo v JS
}

function scream(){
    console.log("AAAUUGHGGHGHGRU"); //fci. lze definovat i bokem a pak si ji zavolat
}

btn.onmouseenter = scream; //funkci passneme do eventhandeleru bez () !!!

// lze vše zkombinovat pro kratší zápis:

document.querySelector("h1").onclick = () => {
    alert("Klikl jsi na h1!!")
};
// přidání eventu pomocí .addEventListener

const btnV3 = document.querySelector("#v3");

btnV3.addEventListener("click", () => {
    alert("Spuštěno z .addEventListnener!")
});

const twAst = document.querySelector("#tas");

function twist(){
    console.log("twist");
};

function shout(){
    console.log("shout");
};

// pomocí onclick NELZE nastavit více výstupů - pouze 1

// twAst.onclick = twist;
// twAst.onclick = shout;

twAst.addEventListener("click", twist); // lze spustit více samostatných eventů pod stejným listenerem
twAst.addEventListener("click", shout, {once: true}); // provede se pouze při 1. triggeru eventu, poté už NE

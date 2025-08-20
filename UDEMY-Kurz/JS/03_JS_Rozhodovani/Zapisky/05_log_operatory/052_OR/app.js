// 0-5 zdarma
// 5-10 $10
// 10-65 $20
// 65+ zdarma

const vek = prompt("Zadej svůj věk: ")

if(vek >= 0 && vek < 5 || vek >= 65){
    console.log("Máte vstup zdarma!");
} else if (vek < 10){
    console.log("Vstup za $10!");
} else if(vek < 65){
    console.log("Vstup za $20!")
}else{
    console.log("Neplatný vek!")
}
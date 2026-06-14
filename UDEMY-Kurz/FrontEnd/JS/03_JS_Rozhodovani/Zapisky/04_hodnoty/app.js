const uzivVstup = prompt("Zadej cokoli: ");

if (uzivVstup) {
  console.log("V proměnné uzivVstup je uložéná pravdivá/existující hodnota");
} else {
  console.log("V proměnné uzivVstup není uložéná pravdivá/existující hodnota");
}

console.log(`Obsah promptu je |${uzivVstup}| a je typu ${typeof uzivVstup}.`);

//else se v tuto chvíli nevykonná nikdy -> prompt vždy vrací input jako string!
// string s nějakým char. je vždy true

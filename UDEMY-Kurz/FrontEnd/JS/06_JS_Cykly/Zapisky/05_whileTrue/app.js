// ukázka while true loopu s keywordem break

let input = prompt("napiš něco...");

while (true) {
  input = prompt(`Zadej něco dalšího, nyní jsi napsal ${input}`);
  if (input === "TICHO") {
    //pokud se splní tato podmínka, tak se provede to uvnitř if včetně break;
    console.log("OK :(");
    break;
  }
}

const form = document.querySelector("#shelterForm");
const list = document.querySelector("#cats");
const catName = document.querySelector("#text1");

form.addEventListener("submit", (evt) => {
    console.log(catName.value);
    console.log("Odesláno!!!");
    evt.preventDefault(); // zamezení default funkcionalitě (odeslání formu)
    console.log("Přesměrování (def. fci.) bylo zabráněno!!");
    const newLI = document.createElement("li");
    newLI.append(catName.value);

    list.append(newLI);
    catName.value = "";
})


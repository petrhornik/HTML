const form = document.querySelector("#shelterForm");
const list = document.querySelector("#cats");
const catName = document.querySelector("#text1");

form.addEventListener("submit", (evt) => {
  console.log(catName.value); //detekujeme "odeslání" formuláře
  console.log("Odesláno!!!");
  evt.preventDefault(); // zamezení default funkcionalitě (odeslání formu)
  console.log("Přesměrování (def. fci.) bylo zabráněno!!");
  const newLI = document.createElement("li");
  newLI.append(catName.value);

  list.append(newLI);
  catName.value = "";
});

// další form

const form2 = document.querySelectorAll("form")[1];
const user = document.querySelector(".user");
const uName = document.querySelector("#name");
const uPass = document.querySelector("#pass");

form2.addEventListener("submit", (evt) => {
  evt.preventDefault();
  user.innerText = `Uživatel: ${uName.value} heslo: ${uPass.value}`;
});

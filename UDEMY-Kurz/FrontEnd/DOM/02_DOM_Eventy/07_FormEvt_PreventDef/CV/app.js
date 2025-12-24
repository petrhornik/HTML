const form = document.querySelector('form');
const quantity = document.querySelector("#qty");
const product = document.querySelector("#product");
const list = document.querySelector("#list");

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let newLi = document.createElement("li");
    newLi.innerText = `${quantity.value} - ${product.value}`;
    list.append(newLi);
    product.value = "";
    quantity.value = "";
});
const greet = document.querySelector("#hello");
const seeOff = document.querySelector("#goodbye");

greet.addEventListener("click", () => {
    console.log("hello");
});

seeOff.addEventListener("click", () => {
    console.log("goodbye");
});
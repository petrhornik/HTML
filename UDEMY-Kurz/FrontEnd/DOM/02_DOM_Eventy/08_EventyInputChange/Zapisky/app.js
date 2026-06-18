const input = document.querySelector("input");
const input2 = document.querySelectorAll("input")[1];
const heading = document.querySelector("h1");

/// mění se jen při opuštění inputu
input.addEventListener("change", (evt) => {
  console.log(input.value);
});

/// mění se při každé změně inputu
input2.addEventListener("input", (evt) => {
  console.log(input2.value); //provede se při každé změně inputu
  heading.innerText = input2.value;
});

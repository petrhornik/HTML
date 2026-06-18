const container = document.querySelector("#container");
const button = document.querySelector("#changebtn");
const colors = [];
const makeRandomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g}, ${b})`;
};

button.addEventListener("click", (evt) => {
  container.style.backgroundColor = makeRandomColor();
  evt.stopPropagation(); // zastaví bubbling zde, rodič se už provádět nebude
});

container.addEventListener("click", () => {
  container.style.display = "none"; //shová div i při kliknutí na tlačítko, to se dít nemá!
});

// vytvoření nového HTML elementu pomocí DOM


// #1 - document.createElement() a .appendChild

const newIMG = document.createElement("img");

console.dir(newIMG); // vypíše list vlastností urč. DOM (js) objektu

newIMG.src = "https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/fea76bef-c115-4aeb-c5f7-b35f22d73700/avatarhd";
const addedToHTML = document.body.appendChild(newIMG); //přidá vytvořený DOM objekt do HTML k urč. elementu
addedToHTML.classList.add("square");

const newH3 = document.createElement("h3");
newH3.innerText = "Hello, my name is Aqua and I am new here!";
document.body.appendChild(newH3);

// tip: appendovat by se mělo až nakonec, veškeré úpravy a vkládání kontentu by se mělo dít předtím :D

// #2 - .append

const FirstParagraph = document.querySelector("p");
    // výběr 1. paragrafu

FirstParagraph.append("HELLO, I WAS APPENDED HERE!!!", " ", "More at once?...No problem mate!");
    // vložení na konec


const newBold = document.createElement("b");
newBold.innerText = "Hello how are ya? I was prepanded here!";
FirstParagraph.prepend(newBold);

// #3 .insertAdjacentElement()

const newH2 = document.createElement("h2");
newH2.append("I like anime veeeeery much!!!!"); // .innerText lze nahradit za .append

const h1 = document.querySelector("h1"); // vytvořím odkaz na h1 z HTML

h1.insertAdjacentElement("afterend", newH2); //přidám do HTML H2

// #4 - after

const anotherH3 = document.createElement("h3");

anotherH3.append("Marin Kitagawa for the win!");
h1.after(anotherH3);
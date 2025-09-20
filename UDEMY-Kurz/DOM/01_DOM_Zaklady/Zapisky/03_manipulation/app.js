// selecting

// #1 getElementById

const image = document.getElementById("banner"); // odkazuje na objekt obsažený v DOM reprezentující .html element s id="banner"
const tabulka = document.getElementById("toc");

console.log(image);
console.log(tabulka);

// #2 - getElementsByTagName

const images = document.getElementsByTagName("img");

console.log(images); // vrací HTMLcollection
// v tomto případě veškeré img HTML tagy

console.log(images[3]); // přístup ke konkrétnímu elementu z kolekce

for (let img of images) {
  // s HTML collection lze zacházet jako s iratable
  console.log(img.src);

  //img.src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" ;
} // změní v objektech img tagů src na toto :D

// #2.1

const sekce = document.getElementsByTagName("div");

console.log(sekce);

// #3 - getElementsByClassName

const triObrazky = document.getElementsByClassName("square");
//vezme vsechny html elementy se stejnou class a vati jako HTMLcollection
console.log(triObrazky);

for (let img of triObrazky) {
  img.src =
    "https://www.kinoart.cz/obrazky/1f8b080000000000020315cccb0ec1400040d17f992d623a8f76c68ea21e2d29cd84e53c298a5242c5bfabedcdc9fd80c256fb8b013d20edbd83a8dfd1d50db441fe9cd85753b5ef10364472df58439d415c33ca880ab882c4c3a4a1f6ac6fef6b65ff1334b661d8e5719e26b2980d866bb538b45c0c639615684e190e0f789b0ad77a5c22788271294e928f3315392af85ac17a311d9441304b50121de15dec8e9b7e36ba46b53281b75ce50f5b4fc1f70756d52be0b6000000/front.photo.g7.jpg";
} // změní adresu každeho obrazku s class="square"

// #4 - querrySelector

const prvniParagraf = document.querySelector("p");
// i když tagů existuje víc, tak se vždy vybere pouze ten úplně první
console.log(prvniParagraf);

const prvniObrazek = document.querySelector("#banner");
// id se identifikuje pomocí # na začátku

console.log(prvniObrazek);

//určení jiného než 1. elementu pomocí nth-of-type()

const druhyParagraf = document.querySelector("p:nth-of-type(2)");

console.log(druhyParagraf);

//určení jiného než 1. elementu pomocí tag propu v []
const javaMentioned = document.querySelector("a[title='Java']"); // nesmím použít stejný typ uvozovek!!!

console.log(javaMentioned);

// přistupování k vnořeným tagům pomocí CSS syntaxe

const anchorInsideParagraph = document.querySelectorAll("p a");

console.log(anchorInsideParagraph);
for (let a of anchorInsideParagraph) {
  console.log(a.href);
}

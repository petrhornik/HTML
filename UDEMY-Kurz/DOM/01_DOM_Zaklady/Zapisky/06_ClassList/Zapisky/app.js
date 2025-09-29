// ukázka classlist pomocí .border .purple v app.css

// #1 bez classlistu

const nadpis_contents = document.getElementById("mw-toc-heading"); // výběr podnadpisu "Contents"

console.log(nadpis_contents.getAttribute("class")); // kontrola jestli už má tag přiřazený nějaký class

nadpis_contents.setAttribute("class", "purple"); // přidáme class .purple z stylesheetu

console.log(nadpis_contents.getAttribute("class")); 

nadpis_contents.setAttribute("class", "border"); // při pokusu o nastavení další class se ta původní přepíše

console.log(nadpis_contents.getAttribute("class"));

let currentClasses = nadpis_contents.getAttribute("class");
nadpis_contents.setAttribute("class", `${currentClasses} purple`);
    // takto se to dá obejít, ale NENENENE
console.log(nadpis_contents.getAttribute("class"));

// #2 classlist (oh yeah)

const nadpisHistory = document.getElementById("History");

nadpisHistory.classList.add("purple"); //classy pushujeme jako do arraye

console.log(nadpisHistory.classList);

nadpisHistory.classList.add("border"); 

console.log(nadpisHistory.classList); // už to funguje :DD

nadpisHistory.classList.remove("purple"); // smaže class specifikovanou v ("");

console.log(nadpisHistory.classList);

console.log(nadpisHistory.classList.contains("purple")); // vypíše boolean jestli je class obsažena v classlist

nadpisHistory.classList.toggle("purple"); //přidá či vymaže ("přepíná")

console.log(nadpisHistory.classList.contains("purple"));
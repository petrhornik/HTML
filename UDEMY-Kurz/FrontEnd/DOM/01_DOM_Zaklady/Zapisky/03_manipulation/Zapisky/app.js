// manipulation

// #1 - innerText

const paragraf = document.querySelector("p"); // zavolání 1. paragrafu

paragraf.innerText = "Tady nic není!"; //update contentu uvnitř paragrafu

// #2 - textContent

const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
  link.textContent = "TOTO JE ODKAZ!!"; // textContent funguje +- stejně jako innerText
}

// #3 - innerHTML
// pomocí tohoto už můžu do elementu vložit celou HTML strukturu (další ementy), nikoli jen text
const nadpis = document.querySelector("h1");

nadpis.innerHTML = "<ul><li>ahoj</li></ul>";

nadpis.innerHTML += "<a>přidaný element pomocí innerHTML +=</a>";
// pomocí += lze přidávat další HTML prvky bez přepsání původního obsahu
// tip - to samé jako když v linuxu použiji >> místo >

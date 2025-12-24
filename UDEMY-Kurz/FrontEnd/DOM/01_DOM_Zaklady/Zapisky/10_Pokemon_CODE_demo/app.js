const div = document.querySelector(".container");

for(let i = 1; i <= 100; i++){
    let link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    const pokeIMG = document.createElement("img");
    const pokeDiv = document.createElement("div")
    const numSpan = document.createElement("span");
    pokeIMG.src=link;
    numSpan.append(`${i}`);
    pokeDiv.append(pokeIMG, numSpan);
    pokeDiv.classList.add("card");
    div.append(pokeDiv);
} 
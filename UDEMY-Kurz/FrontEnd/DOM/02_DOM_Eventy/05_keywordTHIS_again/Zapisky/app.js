// ukázka this při použití s DOM

const makeRandColor = () => {
    const random = [];
    for(let i = 0; i < 3; i++){
        random.push(Math.floor(Math.random() * 255 + 1));
    }
    return `rgb(${random[0]}, ${random[1]}, ${random[2]})`;
}

// použití this pro využití bokem definované fce. ve více eventech pro různé DOM obj.

function changer(){
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
};

const buttons = document.querySelectorAll("button");

for (let button of buttons){
    button.addEventListener("click", changer);
};

const h1s = document.querySelectorAll("h1");

for (let h1 of h1s){
    h1.addEventListener("click", changer)
};


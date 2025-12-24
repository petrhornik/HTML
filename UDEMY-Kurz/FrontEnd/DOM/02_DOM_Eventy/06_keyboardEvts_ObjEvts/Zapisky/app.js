// Keyboard evt. a eventy objektů

document.querySelector("button").addEventListener("click", (evt) => {
    console.log(evt);
});

const textInput = document.querySelector("input");

textInput.addEventListener("keydown", () => {
    console.log("Ztlačena klávesa!!!"); // vypíše se pokaždé co bude stlačena jakákoli klávesa při interakci s inputem
});

textInput.addEventListener("keyup", () => {
    console.log("Klávesa puštěna!!!"); // vypíše se po každém puštění klávesy při interakci s inputem
});

textInput.addEventListener("keydown", (evt) => {
    console.log(`Ztlačil jsi: ${evt.key}`);
    console.log(`Kód klávesy je: ${evt.code}`);
});

// nasloucht stlačení kláves lze přímo přes windows obj.

window.addEventListener("keydown", (evt) => {

    switch (evt.code){
        case "ArrowUp":
            console.log("UP!!")
            console.log(`Kód klávesy je: ${evt.code}`);
            break;
        case "ArrowDown":
            console.log("DOWN!!")
            console.log(`Kód klávesy je: ${evt.code}`);
            break;
        case "ArrowLeft":
            console.log("LEFT!!")
            console.log(`Kód klávesy je: ${evt.code}`);
            break;
        case "ArrowRight":
            console.log("RIGHT!!")
            console.log(`Kód klávesy je: ${evt.code}`);
            break;
    }
});
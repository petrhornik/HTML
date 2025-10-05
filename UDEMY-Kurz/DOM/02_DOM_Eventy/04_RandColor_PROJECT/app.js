const colorBtn = document.querySelector("button");
const body = document.querySelector(".color");
const headText = document.querySelector(".heading");

colorBtn.addEventListener("click", () => {
    const random = [];
    for(let i = 0; i < 3; i++){
        random.push(Math.floor(Math.random() * 255 + 1));
    }
    let color = `rgb(${random[0]}, ${random[1]}, ${random[2]})`;
    console.log(color);
    body.style.backgroundColor = color;
    headText.innerText = color;

    let brightness = 0;
    for (let j = 0; j < random.length; j++){
        brightness += random[j];
    }
    console.log(brightness);
    if (brightness <= 100){
        headText.style.color = "white";
    };
});
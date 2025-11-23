const fakeRequest = (url) => {
    return new Promise((resolve, reject) =>{ //resolve a promise -> přes ně se passují callback fce. 
        const rand = Math.random();
        setTimeout(() => { // uvnitř promise sepíšu logiku
            if (rand < 0.7){
                resolve("FAKE DATA WORKED!!"); //není potřeba return jelikož resolve je 1 ze závěrů, tím pádem se to zde ukončí
            }
            reject("REQUEST ERROR!!");
        }, 1000)
    })
};

fakeRequest("dogo.com")
    .then((data) => {
        console.log("DONE with request")
        console.log("DATA:", data)
    })
    .catch((err) => {
        console.log(err)
    })

const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay)
    })
}

delayedColorChange("red", 1000)
.then(() => {
    return delayedColorChange("purple", 1000);
})
.then(() => {
    return delayedColorChange("yellow", 1000);
})
.then(() => {
    return delayedColorChange("pink", 1000);
})
.then(() => {
    return delayedColorChange("wheat", 1000);
})
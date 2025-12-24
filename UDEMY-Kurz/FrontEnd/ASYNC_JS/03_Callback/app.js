document.body.style.backgroundColor = "lightblue";

/*
    NE!!!

setTimeout(() => {
    document.body.style.backgroundColor = "lightgreen";
}, 1000);
setTimeout(() => {
    document.body.style.backgroundColor = "lightpink";
}, 2000);
setTimeout(() => {
    document.body.style.backgroundColor = "lightyellow";
}, 3000);

*/
/*

Nesting - callback hell 😐 -> brzy se stane velmi nepřehledným!!!

setTimeout(() => {
    document.body.style.backgroundColor = "lightgreen";
    setTimeout(() => {
        document.body.style.backgroundColor = "lightpink";
        setTimeout(() => {
            document.body.style.backgroundColor = "lightgrey";
        }, 1000);
    }, 1000);
}, 1000);

*/


// Pravděpodobně nejlepší řešení 😎
const delayColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay);
};

delayColorChange("lightgreen", 1000, () => {
    delayColorChange("lightpink", 1000, () => {
        delayColorChange("lightgreen", 1000, () => {
            delayColorChange("teal", 1000, () => {});
        });
    });
});



searchMoviesAPI("amadeus", () => {
    saveToMyDB(movies, () => {
        // vše OK
    }, () => {
        // vyskytne se chyba při ukládání
    });
})
const fs = require('node:fs');

fs.mkdir('TESTforlder', { recursive: true }, (err) => { //fce. je asynchronní (nečeká se na ni)
    console.log("Uvnitř callbacku")
    if (err) {throw(err);};
});

console.log("Složka úspěšně vytvořena!")
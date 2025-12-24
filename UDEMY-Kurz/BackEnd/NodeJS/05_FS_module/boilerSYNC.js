const fs = require('node:fs');

fs.mkdirSync('TESTforlder2', (err) => { //SYNC udává synchronní fci. <- čeká se na ni
    if (err) {throw(err);};
});

console.log("Složka úspěšně vytvořena!")
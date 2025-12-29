// inicializace a spuštění expressJS serveru

const express = require("express");
const app = express()

// nastavení portů pro naslouchání

const portNum = 8080;

app.use((req, res) => {
    console.log("Přišel nový request!!")
    // res.send("Zdravím, ze serveru, request dorazil!")
    res.send({roses: "red", violets: "blue", error: "line 32"}); // toto se odešle jako odpověď na request -> typ JSON
});

app.listen(portNum, () => {    //naslouchá na localhost:3000
    console.log(`Naslouchám na portu ${portNum}!`);
})


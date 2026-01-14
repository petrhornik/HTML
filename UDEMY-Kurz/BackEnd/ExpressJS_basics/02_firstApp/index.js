// inicializace a spuštění expressJS serveru

const express = require("express");
const app = express()

// app.use() => vykoná se při každém requestu (hl. použití jako middleware)

/* app.use((req, res) => {
    console.log("Přišel nový request!!")
     res.send("Zdravím, ze serveru, request dorazil!")
     res.send({roses: "red", violets: "blue", error: "line 32"}); // toto se odešle jako odpověď na request -> typ JSON
}); */

// app.get() => důraz na routy (pouze pro GET requesty)

app.get("/", (req, res) => {
    console.log("proběhl app.get z home!");     // callback stejný jako u app.use()
    res.send("HOMEPAGE");
})

app.get("/cats", (req, res) => {
    console.log("proběhl app.get z cats!");
    res.send("MEOW");
})

app.get("/dogs", (req, res) => {
    console.log("proběhl app.get z dogs!");
    res.send("WOOF");
})

// app.post() => request na server ()

app.post("/cats", (req, res) => {
    console.log("proběhl app.post na cats!");
    res.send("POST REQUEST NA /cats");
})

app.get(/(.*)/, (req, res) => {
    res.send("TATO CESTA NENÍ VYUŽÍVÁNA!!");
})

// .listen bývá vždy na konci -> nastavení portů pro naslouchání requestů
const portNum = 8080;

app.listen(portNum, () => {    //naslouchá na localhost:8080
    console.log(`Naslouchám na portu ${portNum}!`);
})


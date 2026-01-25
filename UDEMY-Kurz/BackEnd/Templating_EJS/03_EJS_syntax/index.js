const express = require("express");
const path = require("path")
const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views")) 

app.get("/", (req, res) => {
    res.render("home") 
})

app.get("/randomNUM", (req, res) => {
    const randNum = Math.floor(Math.random() * 20);
    const comment = "Toto je testovací komentář"; // lze passovat i bez nastaveného key-val (naz_prom bude key-val)
    res.render("randomizer", {num: randNum, title: "Generátor náhodných čísel", comment}) //passování hodnot podobné Reactu, objekt může obsahovcat více hodnot a passuje je pod key-val
})

// subreddit DEMO

app.get("/r/:subreddit", (req, res) => {
    const {subreddit} = req.params; // data z requestu
    res.render("subredditDEMO", {subreddit})    // lze tímto stylem i passovat hodnoty z requestu
})



app.listen(3000, () => {    
    console.log(`Naslouchám na portu 3000!`);
})

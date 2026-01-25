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
    const comment = "Toto je testovací komentář";
    res.render("randomizer", {num: randNum, title: "Generátor náhodných čísel", comment})
})

app.listen(3000, () => {    
    console.log(`Naslouchám na portu 3000!`);
})

const express = require("express");
const app = express()


app.get("/", (req, res) => {
    console.log("proběhl app.get z home!");    
    res.send("HOMEPAGE");
})

// path variable -> definuju pattern jak má cesta vypadat

app.get("/r/:subreddit", (req, res) => { // pattern musí být dodržen pokud se toto má spustit (vždy musí být /r/ a potom se dosadí jakýkoli text do proměnné)
    console.log(req.params)
    res.send(`<h1>Vítejte na subredditu: ${req.params.subreddit}</h1>`)
})

app.get("/r/:subreddit/:postID", (req, res) => { 
    console.log(req.params)
    res.send(`<h1>Sledujete příspěvek: ${req.params.postID} na subredditu: ${req.params.subreddit}</h1>`)
})


app.get("/cats", (req, res) => {
    console.log("proběhl app.get z cats!");
    res.send("MEOW");
})

// query string usage

app.get("/search", (req, res) => { 
    console.log(req.query); //objekt s uloženým query stringem (nebo stringy)
    const {q} = req.query;
    
    if(!q){
        res.send("Nic jste nevyhledali!")
    }
    res.send(`<h1>Vyhledáváte: ${q}</h1>`) // dále se dá využit někde v kódu
})

app.post("/cats", (req, res) => {
    console.log("proběhl app.post na cats!");
    res.send("POST REQUEST NA /cats");
})

app.get(/(.*)/, (req, res) => {
    res.send("TATO CESTA NENÍ VYUŽÍVÁNA!!");
})


const portNum = 8080;

app.listen(portNum, () => {    
    console.log(`Naslouchám na portu ${portNum}!`);
})


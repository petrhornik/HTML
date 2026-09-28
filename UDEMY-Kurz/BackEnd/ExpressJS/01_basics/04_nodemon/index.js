const express = require("express");
const app = express()


app.get("/", (req, res) => {
    console.log("proběhl app.get z home!");    
    res.send("HOMEPAGE");
})

app.get("/r/:subreddit", (req, res) => { 
    console.log(req.params)
    res.send(`<h1>Vítejte na subredditu: ${req.params.subreddit}</h1>`)
})

app.get(/(.*)/, (req, res) => {
    res.send("TATO CESTA NENÍ VYUŽÍVÁNA!!");
})


const portNum = 8080;

app.listen(portNum, () => {    
    console.log(`Naslouchám na portu ${portNum}!`);
})


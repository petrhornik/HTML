const express = require('express');
const app = express();

// import a nastavení session
const session = require('express-session');

// vytažení nastavení session bokem pro přehlednost - musí mít specifikované alespoň tyto prvky jinak bude vracet errory do console
const sessionOptions = {
    secret: "thisismysecretsignitureforcookies",
    resave: false,
    saveUninitialized: false,
    
}

// inicializace session úložiště pro ExpressJS 

app.use(session(sessionOptions));


app.get("/viewcount", (req,res) => {
    if(req.session.count){
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`Yout have viewed this page ${req.session.count} times!!`)
});

// další ukázka využití session úložiště na BE

app.get("/register", (req,res) => {
    const {username = "Anonymous"} = req.query;
    req.session.username = username;                // uložím hodnotu z query stringu do konkrétní session stoerage pod key-val username pro konkrétní instanci a následně asi ho můžu vypsat na /greet
    res.redirect("/greet")
});

app.get("/greet", (req,res) => {
    const {username} = req.session;
    res.send(`Vítej zpět ${username}`);
});

app.listen(3000, () => {
    console.log("Server běží na portu 3000")
});
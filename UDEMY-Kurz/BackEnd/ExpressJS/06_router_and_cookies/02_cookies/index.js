const express = require("express");
const app = express();

// přidání funkcionality pro čtení cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser("totojemujsecretkodprosignedcookie"));    // inicializace cookie-parseru s secret stringem pro tvorbu signed cookies


app.get("/greet", (req,res) => {
    console.log(req.cookies);   // získání nepodepsaných sušenek
    const {name = "USER"} = req.cookies;
    res.send(`Zdravím tě ${name}!`);
})

app.get("/setname", (req,res) => {
    res.cookie("name", "David");
    res.cookie("gender", "male");
    res.send("Dostal jsi HTTP sušenky :D");
})

app.get("/getsignedcookie", (req,res) => {
    res.cookie("fruit", "hroznove vino", {signed: true});
    res.send("Tu máš podepsanou sušenku!")
})

app.get("/verifyfruit", (req,res) => {
    res.send(req.signedCookies); // získání signed cookies
})

app.listen(3000, () => {
    console.log("GUT - jedu na portu 3000");
})
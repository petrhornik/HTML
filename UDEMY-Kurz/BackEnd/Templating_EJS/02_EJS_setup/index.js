const express = require("express");
const path = require("path")
const app = express()

app.set("view engine", "ejs") // nastavení templating typu na EJS
app.set("views", path.join(__dirname, "/views")) // nastavuju pevnou lokaci views složky -> do terminálové cesty přidám dirname (naz - složky ve které je index.js) a /views
// tip -> views se dá tímto stylem i přejmenovat


app.get("/", (req, res) => {
    res.render("home")  // jako odpověď vrací specifikovanou stránku (.ejs soubor ve /views) v ("naz_stranky")
})

app.listen(3000, () => {    
    console.log(`Naslouchám na portu 3000!`);
})

const express = require("express");
const path = require("path"); //manipuluje s cestou odkud je index.js spuštěn
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public"))) // použiju use middleware pro import veškerých souborů v této složce na client-side
                                  // lze použít i jiná složka (název v "" značí konkrétní složku)
                                  // u path.join nepoužívám / !!


app.get("/", (req, res) => {
    res.render("home") 
})


app.listen(3000, () => {    
    console.log(`Naslouchám na portu 3000!`);
})

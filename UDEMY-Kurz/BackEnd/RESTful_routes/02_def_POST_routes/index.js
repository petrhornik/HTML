const express = require("express");
const app = express();

app.use(express.json({ extended: true })) // middleware parsující req.body (aby vůbec fungovalo) -> lze použít i express.json v urč. případech
                                                // toto umí zpracovat pouze HTML form data

app.get("/tacos", (req, res) => {
    res.send("response: přišel GET request na /tacos")
});

app.post("/tacos", (req, res) => {
    console.log(req.body)
    const {item, quantity, delivery} = req.body;
    res.send(`response: přišel POST request na /tacos -> Položka ${item}, množství ${quantity}, datum dodání ${delivery}`)
})

app.listen(3000, () => {
    console.log("naslouchám na portu 3000")
})
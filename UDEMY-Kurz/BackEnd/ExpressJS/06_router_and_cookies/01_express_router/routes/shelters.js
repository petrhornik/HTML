const express = require("express");
const router = express.Router(); // zavolání routeru

router.get("/", (req,res) => {  // routy specifikuju místo app do router
    res.send("Všechny útulky");
})

router.post("/", (req,res) => {
    res.send("Tvorba utulku");
})

router.get("/:id", (req,res) => {
    res.send("Konkrétní utulek");
})

router.get("/:id/edit", (req,res) => {
    res.send("Editace konkrotniho utulku");
})

module.exports = router;    // po přidání cest do routeru ho exportuju a zavolám si ho v hlavním souboru pod proměnnou např.: shelterRouter
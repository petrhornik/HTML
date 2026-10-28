const express = require("express");
const router = express.Router();

router.use((req,res,next) => {  // middleware specifikuju stejně jako routu pomocí router.use
    if(req.query.isAdmin) {
        next();
    }
    res.send("NEMATE PRISTUP SORRY JAKO!")
})


router.get("/topsectet", (req,res) => {
    res.send("TOTO JE TAJNE")
})

router.get("/deleteeverything", (req,res) => {
    res.send("SMAZAT VŠE!")
})

module.exports = router;
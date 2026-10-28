const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.send("Všichni psy")
})

router.get("/:id", (eq,res) => {
    res.send("Konkrétní pes")
})

router.get("/:id/edit", (req,res) => {
    res.send("Edit konkrétního psa")
})

module.exports = router;
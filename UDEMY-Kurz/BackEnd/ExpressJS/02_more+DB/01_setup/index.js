const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose");

// konfigurace/napojení mongoose na MongoDB
mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("mongoose connected to db -> GUT!");
  })
  .catch((err) => {
    console.log("OH NO error in connection:");
    console.log(err);
  });


// konfigurace expressJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

app.get("/test", (req,res) => {
    res.send("Working gut!")
})

// nastartování expressjs
app.listen(3000, () => {
    console.log("Jedu a poslouchám na 3000!");
})
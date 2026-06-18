const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/carBrands", (req, res) => {
  const cars = ["skoda", "volvo", "opel", "BMW", "Xiaomi", "xPeng"];
  res.render("carList", { brands: cars });
});

app.listen(3000, () => {
  console.log(`Naslouchám na portu 3000!`);
});

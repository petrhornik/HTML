const express = require("express");
const app = express();
const morgan = require("morgan");


app.use(morgan("tiny")); //morgan middleware pro loggování requestů z FE
app.use(morgan("dev"))

app.get("/", (req,res) => {
    res.send("Home page!");
});

app.get("/dogs", (req,res) => {
    res.send("Woof wooF!")
});


app.listen(3000, () => {
    console.log("GUT -> jedu na portu 3000!")
})
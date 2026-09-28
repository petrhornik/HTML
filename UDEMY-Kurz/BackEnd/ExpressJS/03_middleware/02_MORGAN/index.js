const express = require("express");
const app = express();
const morgan = require("morgan");


app.use(morgan("tiny")) // app.use() se provede před každým requestem na ExpressJS na jakoukoli routu 
app.use(morgan("dev")); //morgan middleware pro loggování requestů z FE

app.get("/", (req,res) => {
    res.send("Home page!");
});

app.get("/dogs", (req,res) => {
    res.send("Woof wooF!")
});


app.listen(3000, () => {
    console.log("GUT -> jedu na portu 3000!")
})
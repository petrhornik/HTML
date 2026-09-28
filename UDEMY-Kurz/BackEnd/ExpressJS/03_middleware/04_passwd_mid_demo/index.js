const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("common"));

app.use((req,res,next) => {    
    req.method = "GET"; 
    req.requestTime = Date.now();  
    console.log("request is: " + req.method.toUpperCase() + " to route: " + req.path);
    next();
});

app.use("/dogs", (req,res,next) => {    
    console.log("Specifický middleware proběhl!");
    next();
});

// autentizační middleware DEMO

const verifyPasswd = (req,res,next) => {    // v tomto případě si to vytvořím jako klas. fci a budu to passovat do konkrétních route jako callback

    const {passwd} = req.query;
    if(passwd === "pass123"){
        next();
    }else{
        res.send("Přístup ZAMÍTNUT!!! Neplatné heslo.")
    };
};

//

app.get("/", (req,res) => {
    res.send("Home page!");
});

app.get("/dogs", (req,res) => {
    console.log(req.requestTime);
    res.send("Woof wooF!")
});

app.get("/secret", verifyPasswd,(req,res) => {
    res.send("Přístup povolen.")
});

app.use((req,res) => {
    res.status(404).send("Cesta pro request nenalezena!!!")
});

app.listen(3000, () => {
    console.log("GUT -> jedu na portu 3000!")
});


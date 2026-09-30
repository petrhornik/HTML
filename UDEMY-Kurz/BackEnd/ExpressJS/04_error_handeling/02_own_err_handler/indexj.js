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

const verifyPasswd = (req,res,next) => {   
    const {passwd} = req.query;
    if(passwd === "pass123"){
        next();
    }else{
        // res.send("Přístup ZAMÍTNUT!!! Neplatné heslo.")
        throw new Error("Je vyžadováno heslo!");    // při použití default error handleru se mi triggrne můj custom hanler middleware
    };
};

// specifický middleware

app.use("/dogs", (req,res,next) => {    
    console.log("Specifický middleware proběhl!");
    next();
});

app.get("/", (req,res) => {
    res.send("Home page!");
});

app.get("/dogs", (req,res) => {
    console.log(req.requestTime);
    res.send("Woof wooF!")
});

app.get("/secret", verifyPasswd,(req,res) => {  // za routu lze vsadit více fcí. současně (vznik tzv. middleware fcí.)
    res.send("Přístup povolen.")
});

// ukázka nefunkční routy co vrací error (konkrétně zde JS syntax error)

app.get("/error", (req,res) => {
    chicken.fly();                  // když toto vrátí error zachytí to můj custom error handler middleware
})

app.use((req,res) => {
    res.status(404).send("Cesta pro request nenalezena!!!")
});

// ukázka vlastního globálního error handleru

app.use((err,req,res,next) => {
    console.log("******************");
    console.log("******ERROR*******");
    console.log("******************");
    next(err);  // původní error z build in Express err handleru, ale opět dojde k překreslení stránky
})


app.listen(3000, () => {
    console.log("GUT -> jedu na portu 3000!")
});


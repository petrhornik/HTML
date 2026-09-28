const express = require("express");
const app = express();
const morgan = require("morgan");

// * Ukázka definování middleware

/*

app.use(morgan("tiny"))
app.use((req,res, next) => {
    console.log("Proběhl můj middleware a pokračuju dál!"); // provede se pokaždé před requestem
    return next(); // předá řízení dalšímu middleware/zpracování requestu (další části kódu)
    // console.log("Toto se provedlo až po provedení kódu na který odkazuje next!!");  -> po next() UŽ BY NEMĚL BÝT ŽÁDNÝ KÓD
});
app.use((req,res,next) => {
    console.log("Provedl se další middleware a jede se dál!!");
    return next(); //bez next() se kód zasekne zde a nic se dál dít nebude! - return tu je z bezpečnostního důvody aby za next už nebyl spouštěn žádný kód
});
 
*/

// * Middleware practice

app.use(morgan("common"));

app.use((req,res,next) => {     // v middleware stejně jako v CRUD operacích v mém provizorním BE API mám full access k requestu z FE
    req.method = "GET"; // můžu manipulocat s čímkoli pokud chci
    req.requestTime = Date.now();   // v každém requestu bude response time zaměněn za Date.now()
    console.log("request is: " + req.method.toUpperCase() + " to route: " + req.path);
    next();
});

// ukázka middleware pro konkrétní route

app.use("/dogs", (req,res,next) => {        //toto se provede pouze pokud route začíná na /dogs
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

app.use((req,res) => {
    res.status(404).send("Cesta pro request nenalezena!!!")
});

app.listen(3000, () => {
    console.log("GUT -> jedu na portu 3000!")
});


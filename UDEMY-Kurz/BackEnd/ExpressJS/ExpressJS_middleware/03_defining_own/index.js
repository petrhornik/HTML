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
    console.log("request is: " + req.method.toUpperCase());
    next();
})

app.get("/", (req,res) => {
    res.send("Home page!");
});

app.get("/dogs", (req,res) => {
    res.send("Woof wooF!")
});


app.listen(3000, () => {
    console.log("GUT -> jedu na portu 3000!")
})
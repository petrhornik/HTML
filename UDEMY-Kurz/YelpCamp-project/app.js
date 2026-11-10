// centrální soubor celé web. aplikace odkud se všechno řídí
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate"); // engine pro ejs, který umožňuje používat layouty
const methodOverride = require("method-override");
const session = require("express-session"); // package pro správu sessions v projektu - přímo od expressu
const flash = require("connect-flash"); // package pro flash messages

// import custom error class a error function wrapperu
const ExpressError = require("./utils/ExpressError.js");


// import routů ze souborů oddělených pře expressJS router
const campgroundsRoutes = require("./routes/campgrounds.js")
const reviewRoutes = require("./routes/review.js")


// connection do DB -> v kurzu už depricated způsob, tak jsem z toho uvařil tenhle mess (v praxi používat klasicky .then promise)
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("GUT! -> DB connected!")
})
mongoose.connect("mongodb://localhost:27017/YelpCamp-project");


// konfigurace expressJS 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.engine("ejs", ejsMate); // udává ře místo výchozího enginu ejs se využije na zpracování ejs-mate
app.use(express.urlencoded({extended: true})); // bez tohoto mi express nebude parsovat HTML formy v POST requestu
app.use(methodOverride("_method"));     // díky tomuto můžu používat i další CRUD metody mimo GET, POST

app.use(express.static(path.join(__dirname, "public"))); // nastavení složky pro serving statických assetů - (public složky :P)

// přidání BE sessions s pomocí express-session package/rozšíření
const sessionConfig = { // veškerá konfigurace funkcionality sessions v tomto projektu
    secret: "totojenejakysecretstringproovereniintegritysessions",
    resave: false,
    saveUninitialized: true,
    cookie: {   // konfigurace session id cookie
        httpOnly: true, // prevence odcizení cookie při pokusu o XSS    (enabled by default...)
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // nastavení expirace po týdnu od založení
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
};
app.use(session(sessionConfig)); //v tuto chvíli pouze do memory-store

// přidání funkcionality pro flash messages
app.use(flash());

app.use((req,res,next) => {
    res.locals.success = req.flash("success"); // díky res.locals.naz_prom se mi bude automaticky importovat do každého res kde middleware budu používat a tedy i do EJS souborů
    res.locals.error = req.flash("error");
    next(); // zakončení middlewre VŽDY!!
})

// samotný BE

app.get("/", (req,res) => {
    res.render("home")
})


// import routeru pro campgrounds
app.use("/campgrounds", campgroundsRoutes);

// import routeru pro reviews
app.use("/campgrounds/:id/reviews", reviewRoutes);


// více ukázek error handlingu
app.all("/{*path}", (req,res,next) => { // provede se najémkoli http requestu na určitou routu -> v tomto případě, úplně na každou routu (to v "" určuje všechny routy)
    next(new ExpressError("Cesta nenalezena :(", 404));      // bude triggerovat pouze u všeho co už není nějak specifikováno výše či pokud se někde výš nevrátí error objekt...
});


// MAIN error handler
app.use((err,req,res,next) => {
    const {statusCode = 500} = err;  // vytáhnu hodnoty z mého custom error objektu (z mé custom třidy) a nastavím jim defaultní hodnoty, kdyby v sobě nic neobsahovaly
    if (!err.message) err.message = "Vyskytla se interní chyba";
    err.statusCode = statusCode;    // dopsání kvůli tomu aby se mi to passnulo do renderu v error objektu
    res.status(statusCode).render("error", {err});     // pomocí res.status() můžu zpět poslat svůj specifický status kód co se zobrazí v responze ze serveru v prohlížeči
})


app.listen(3000, () => {
    console.log("GUT! -> jedu na portu 3000");
});
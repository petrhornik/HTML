const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');

const sessionOptions = { 
    secret: 'thisisnotagoodsecret', 
    resave: false, 
    saveUninitialized: false 
}
app.use(session(sessionOptions));


// inicializace flash message knihovny do ExpressJS
app.use(flash());

const Farm = require('./models/farm')


mongoose.connect('mongodb://localhost:27017/flashDemo')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// FARM ROUTES

app.use((req, res, next) => {   // vytvořím middleware pro všechny routy ať nemusím flashmessage specifikovat individuálně
    res.locals.messages = req.flash('success'); // k proměnné messages budou mít přístup všechny ejs stránky/templaty díky res.locals - proto to nemusím individuálně passovat do každého res.send u každé routy
    next();
})

app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms /*, messages: req.flash("success")*/ })    // passnutí flashmessage do ejs stránky - pokud existuje
})
app.get('/farms/new', (req, res) => {
    res.render('farms/new')
})
app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm })
})

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success', 'Successfully made a new farm!'); // přidání flash message -> nejdřív specifikuju druh zprávy a samotný text zprávy až potom
    res.redirect('/farms')
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})




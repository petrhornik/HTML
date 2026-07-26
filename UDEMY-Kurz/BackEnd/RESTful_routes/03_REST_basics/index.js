/*
    **BASIC CRUD BLUEPRINT**

    GET /comments = list all comments                   index
    POST / comments = create new comment                create
    GET /comments/:id = get one comment (using ID)      show
    PATCH /comments/:id = update one comment            edit
    DELETE /comments/:id = delete one comment           delete/destroy
*/

const { render } = require('ejs');
const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid'); //pro tvorbu iniverzálních unikátních identifikátorů

app.use(express.urlencoded({extended: true}));  //parsuje veškerá data co příjdiou z POST formuláře (maj special formát protože nvm :D)
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const comments = [
    {
        id: uuidv4(),       //při každém zavolání vytvoří unikátní id
        username: "Tom",
        comment: "Hey how are ya?",
    },
    {
        id: uuidv4(),
        username: "Todd",
        comment: "Hello!",
    },
    {
        id: uuidv4(),
        username: "Maria",
        comment: "Use mariaDB for more flexibility and privacy LOL",
    },
    {
        id: uuidv4(),
        username: "WhatTheDog",
        comment: "What am I doin?",
    }
]

app.get('/comments', (req, res) => {            //index route
    res.render('comments/index', {comments});      // vrací konkrétní stránku z views složky a strukturuje koncent dle vybraného templateru specifikovaného ve "view engine"
});

app.get("/comments/new", (req, res) => { //serve route na zobrazení formuláře na přidání commentu
    res.render("comments/new");
});

app.post('/comments/new', (req, res) => {       //create route
    comments.push({
        id: uuidv4(),
        username: req.body.username,
        comment: req.body.comment,
    });
    res.redirect("/comments");   //redirect mě nasměruje na určitou stránku kterou specifikuju (defaultně redirectuje na GET na daný link)
                                // pokud OK tak vrací status 302 (říká prohlížeči o redirect jinam) a link kam má směrovat
});

app.get("/comments/:id", (req,res) => {     //show route
    const {id} = req.params;                        //vezmu id z requestu co přijde sem
    const comment = comments.find(c => c.id === id);       // find vyhledá z leva první relevantní položku v arrayi co odpovídá podmínce (v našem případě kdy jsou shodná id)
    res.render("comments/show", {comment});          //vypíše na této stránce passnutý komentář pokud existuje
})

app.get("/comments/:id/edit", (req,res) => {    //serve route pro formular na editaci commentu
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", {comment});
})

app.patch("/comments/:id", (req, res) => {  //update route
    const {id} = req.params;
    const oldComment = comments.find(c => c.id === id);
    const editedComment = req.body.comment;
    oldComment.comment = editedComment;             //po zavolání původního commentu do něj vsadím nový text co přijde v body patch requestu
    res.redirect("/comments");
});

app.listen(3000, () => {
    console.log("Up and running on port 3000!");
});
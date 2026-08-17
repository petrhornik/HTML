const mongoose = require("mongoose");
//připojení do DB skze mongoose
mongoose
  .connect("mongodb://localhost:27017/moviesApp")
  .then(() => {
    console.log("Everything working GUT!");
  })
  .catch((err) => {
    console.log("OH NO error:");
    console.log(err);
  });

// definování schémat pro modely

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

//vytvoření model třidy pro manipulaci s daty

const Movie = mongoose.model("Movie", movieSchema);

//vytvoření položky
const myMovie = new Movie({
  title: "Babovřesky",
  year: 2013,
  score: 10,
  rating: "PEGI-3",
});

// vložení více položek do DB najednou (ve fci. aby se nespouštělo automaticky)
function insetMultipleData() {
  Movie.insertMany([
    // da toto lze opět navázat .then() a .catch() pro zpracování výsledku komunikace s DB
    { title: "The Dark Knight", year: 2008, score: 9.0, rating: "PG-13" },
    { title: "The Godfather", year: 1972, score: 9.2, rating: "R" },
    { title: "Pulp Fiction", year: 1994, score: 8.9, rating: "R" },
    { title: "Inception", year: 2010, score: 8.8, rating: "PG-13" },
  ])
    .then((data) => {
      console.log("It worked!"); //přidání všech položek proběhlo OK
      console.log(data);
    })
    .catch((err) => {
      console.log("Encountered an error -> ", err);
    });
}

// ukazka update fce. 

function updateOnePieceOfData(){
  Movie.updateOne({title: "Babovřesky"}, {score: 9.0});
}

updateOnePieceOfData();

// ukazka fce. s hybridní CRUD opertací

function findAndUpdateOnePiece(filter_qry, update_qry, options_qry){
  Movie.findOneAndUpdate(filter_qry, update_qry, options_qry).then(res => console.log(res));
}
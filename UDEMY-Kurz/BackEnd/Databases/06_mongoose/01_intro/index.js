const mongoose = require('mongoose');
//připojení do DB skze mongoose
mongoose.connect('mongodb://localhost:27017/moviesApp') // vrací promise, takže handler success/error při připojování lze řešit .then a .catch
.then(() => {
    console.log("Everything working GUT!")
}).catch((err) => {
    console.log("OH NO error:");
    console.log(err)
});

// definování schémat pro modely

//takto bude vypadat v DB dokument filmu (movie)
const movieSchema = new mongoose.Schema({
    title: String,  //do schématu definuju datové typy hodnot v "dokumentu" do DB
    year: Number,
    score: Number,
    rating: String,
})

//vytvoření model třidy pro manipulaci s daty

const Movie = mongoose.model("Movie", movieSchema); //název modelu by měl vždy začínat UpperCase znakem
                                                    //dle názvu modelu se pak vytvoří kolekce, kde se s daty dle konkrétního formátu/schématu bude manipulovat

// pokud přidám či manipuluju s položkou nemusím vyplňovat všechny hodnoty + movu hodnoty specifikovat v jakémkoli pořadí

//vytvoření položky
const myMovie = new Movie({title: "Babovřesky", year: 2013,score: 10, rating: "PEGI-3"})


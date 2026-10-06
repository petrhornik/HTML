/// One to Bilions relation

const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
.then(() => {
    console.log('Spojení s databází navázáno :D');
})
.catch(err => {
    console.log('Při připojování k DB nastala někde chyba...');
    console.log(err);
});

// definování mongoose schémat

const userSchema = new Schema({
    username: String,
    age: Number,
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

// definování modelů

const User = mongoose.model("User", userSchema)
const Tweet = mongoose.model("Tweet", tweetSchema); // schéma s referencí na model User se vála až sem a model se vytvoří o řádek výš, takže je všechno OK :D

// definování funkcí

const makeTweets = async () => {
    const u = new User({username: "linuxEnjoyer123", text: "21"});
    const newTweet = new Tweet({text: "Fedora is better than Arch, fight me!", likes: 86})
};
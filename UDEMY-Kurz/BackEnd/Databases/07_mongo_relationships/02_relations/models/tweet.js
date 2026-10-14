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
const Tweet = mongoose.model("Tweet", tweetSchema); // schéma s referencí na model User se dává až sem a model se vytvoří o řádek výš, takže je všechno OK :D

// definování funkcí

const makeTweets = async () => {
    //const user = new User({username: "linuxEnjoyer123", age: "21"});
    const user = await User.findOne({username: "linuxEnjoyer123"});
    const newTweet = new Tweet({text: "Ubuntu is actually not that bad...", likes: 8600})
    newTweet.user = user; // přiřazení reference na uživatele
    //user.save();
    newTweet.save();
};

const findLatestTweet = async () => {
    const foundTweet = await Tweet.find({}).populate("user", "username");  // populate na doplňění dokumentů namísto odkazovacích objectID
    console.log(foundTweet);
};

//makeTweets();

findLatestTweet();
 
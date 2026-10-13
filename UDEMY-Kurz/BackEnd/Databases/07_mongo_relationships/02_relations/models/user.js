/// One to Few relation

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
.then(() => {
    console.log('Spojení s databází navázáno :D');
})
.catch(err => {
    console.log('Při připojování k DB nastala někde chyba...');
    console.log(err);
});

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [      //definuju zde array do kterého se mi budou ukládat objekty s definovanými hodnotami
                      // tip - array se vytvoří při každém uložení položky i kdyby do něj nebyl passnut žádný objekt
                      // mongoose toto pojme jako embedded (vložené) schéma a bude to brát každý vložený objekt jako samostatný dokument
        {
            _id: {_id: false},  // prevence, aby si embedded dokument nevygenerovával vlastní ID
            street: String,
            city: String,
            state: String,
            country: String,
        }
    ],
});

const User = mongoose.model("User", userSchema);

// vytvoření uživatele

const makeUser = async () => {
    
    const user = new User({
        first: "Tomas",
        last: "Novak"
    });

    user.addresses.push({
        street: "Prazska 123",
        city: "Hradec Kralove",
        state: "Kralovehradecky",
        country: "Czech Republic",
    })
    
    const res = await User.insertOne(user); // lze použít i await user.save()
    console.log(res);
};

// přidání adresy do vnořeného dokumentu/objektu

const addAddress = async(id) => {
    const user = await User.findById({_id: id});
    user.addresses.push({
        street: "Prazska 123",
        city: "Hradec Kralove",
        state: "Kralovehradecky",
        country: "Czech Republic",
    })
    const res = await user.save();
    console.log(res);
};

addAddress('6ac527a5ca4051637a486bfd');
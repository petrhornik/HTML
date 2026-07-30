**Finding (prohlížení obsahu ) kolekcí**

    - pomocí příkazu/metody .find() si zobrazím obsah dané kolekce v DB

    1) db.collection.find() <- gold-standard universal
      - bez passnutých argumentů vypíše vždy všechny dokumenty obsažené v kolekci

       - např.:
                animalShelter> db.dogs.find()
                [
                  { _id: ObjectId('6a67c66ca756b7495496a0d6') },
                  {
                    _id: ObjectId('6a67c699a756b7495496a0d7'),  //unikátní id pro dannou položku
                    name: 'Bert',
                    age: 6,
                    breed: 'yorkshire',
                    catFriendly: true
                  }
                ]
    - do () se dají passovat tzv. querry, které určují "nalezení" pouze specifických dokumentů (děch co splňují podmínku/y)
      - querry může obsahovat více key-val s datovou "podminkou"

      např.:
            animalShelter> db.dogs.find({breed: "Puddle"});
            [
              {
                _id: ObjectId('6a67cc8aa756b7495496a0da'),
                name: 'Betty',
                breed: 'Puddle',
                catFriendly: true,
                age: 2
              },
              ... //vše ostatní co splňuje podmínku z querry
            ]
    1) db.collection.findOne()

      = vrátí pouze 1. položku z kolekce co splňuje podmínku/y v querry


  - dá se říci že .find()/.findOne() manipulije s jakýmsi kurzorem oterý odkazuje na validní položky v kolekci a lze přes ně i iterovat
    

  - #tip: celé MongoDB je CaseSensitive!!!
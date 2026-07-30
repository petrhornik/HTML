**Operations in MongoDB**

- dokumentace: https://www.mongodb.com/docs/manual/crud/
  - jak fungují CRUD operace s MongoDB

- #tip -> dokument = položka/blok dat/objekt (uvnitř nějaké kolekce)

1) Inserting (vkládání) dokumentů

    - místo SQL tabulek tvořím tzv. kolekce
      - zde se data následně seskupují, aby neležela volně

    - pokud se pokusím vložit data do neexistující kolekce, tak se sama automaticky vytvoří
      - *automatizaci se meze zde nekladou i guess, ale aby nevznikl mess*

    - #tip -> veškeré kolekce si mužu vypsat pomocí -> show collections

    - při vložení nové položky do kolekce se jí vygeneruje unikátní id na které odkazuje _id

    - objekty v kolekci NEMUSÍ dodržovat stejnou strukturu

    - máme 3 možnosti

      1)  db.collection.insertOne()

        = vloží pouze 1 objekt/dokument

        - např.:
                    animalShelter> db.dogs.insertOne({name: "Bert", age: 6, breed: "yorkshire", catFriendly: true})
                    {
                    acknowledged: true,
                    insertedId: ObjectId('6a67c699a756b7495496a0d7')
                    }
                    animalShelter> show collections
                    dogs

      2) db.collection.insertMany()

        = vloží vždy více položek současně
          - v () očekává array s položkami ktere vklada
          - všechny položky se vloží do 1 konkrétní kolekce!

      3) db.collection.insert() <- univerzál, ale dnes už depricated
        - official MongoDB konstatuje, že by se mělo používat oddělené insertOne a insertMany, aby se předešlo zbytečným chybám

        = automaticky detekuje jestli je vkládána 1 či více položek
          - basically předchozí 2 v 1

        - např.:
                  animalShelter> db.dogs.insert([{name: "Jack", breed: "German Shepeard",age: 10, catFriendly: false}, {name: "Betty", breed: "Puddle", catFriendly: true, age: 2}])
                  {
                    acknowledged: true,
                    insertedIds: {
                      '0': ObjectId('6a67cdc3a756b7495496a0dd'),
                      '1': ObjectId('6a67cdc3a756b7495496a0de')
                    }
                  }
        
        - zatím ještě funguje.... 27.7.26

  - nemusím nutně psát JSON syntax, Mongo akceptuje i klasické JS objekty a převede si je samo

2) Finding (prohlížení obsahu ) kolekcí

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
    2) db.collection.findOne()

      = vrátí pouze 1. položku z kolekce co splňuje podmínku/y v querry


  - dá se říci že .find()/.findOne() manipulije s jakýmsi kurzorem oterý odkazuje na validní položky v kolekci a lze přes ně i iterovat
    

  - #tip: celé MongoDB je CaseSensitive!!!

3) Updating (aktualizace/úprava) dokumentů/kolekcí

  => pro upravu již existujicích položek

  1) db.collection.updateOne()

    = pro úpravu 1 položky
    - do () se specifikují: filtr_položky(ek), update_data, další...

     - filtr_položky -> pomocí querry vyberu jen to co chci (stejné jako WHERE v SQL) -> selector querry
     - update_data -> NELZE POSLAT KLASICKOU QUERRY
       - musím poslat pomocí "atomického" operátoru $set, který je přímo v mongoDB
         - v update se dá dělat více věcí takže u každé "querry" zde musí být před ní specifikován tento či jinný operátor

    - $set: -> operátor co mění hodnoty v polích položky dle specifikovaných key_val

    - např.:
            animalShelter> db.dogs.find()
            [
              {
                _id: ObjectId('6a6b2e2c0800c203658ce5b0'),
                name: 'Bert',
                age: 6,
                breed: 'yorkshire',
                catFriendly: true
              },
              ...
            ]
            animalShelter> db.dogs.updateOne({name: "Bert"},{$set: {catFriendly: false}})
            {
              acknowledged: true,
              insertedId: null,
              matchedCount: 1,
              modifiedCount: 1,
              upsertedCount: 0
            }
            animalShelter> db.dogs.find()
            [
              {
                _id: ObjectId('6a6b2e2c0800c203658ce5b0'),
                name: 'Bert',
                age: 6,
                breed: 'yorkshire',
                catFriendly: false
              },
              ...
            ]

     - pomocí update se dájí i přidávat další položky do již vytvořených položek v kolekcích

      např.:

        animalShelter> db.dogs.updateOne({name: "Bert"}, {$set: {color: "Magenta"}})
        {
          acknowledged: true,
          insertedId: null,
          matchedCount: 1,
          modifiedCount: 1,
          upsertedCount: 0
        }
        animalShelter> db.dogs.find({name: "Bert"})
        [
          {
            _id: ObjectId('6a6b2e2c0800c203658ce5b0'),
            name: 'Bert',
            age: 10,
            breed: 'yorkshire',
            catFriendly: false,
            color: 'Magenta'
          }
        ]

  2) db.collection.updateMany()

    => pro úpravu celé kolekce najednou
      - vyberou se pro update právě všechny položky z kolekce co splňují filter querry

    - např.: 
            animalShelter> db.cats.find()
            [           
              {
                _id: ObjectId('6a6b2e9c0800c203658ce5b5'),
                dogFriendly: true
              },
              {
                _id: ObjectId('6a6b35040800c203658ce5b6'),
                dogFriendly: true
              }
            ]
            animalShelter> db.cats.updateMany({dogFriendly: true},{$set: {isAvailable: false}})
            {
              acknowledged: true,
              insertedId: null,
              matchedCount: 2,
              modifiedCount: 2,
              upsertedCount: 0
            }
            animalShelter> db.cats.find()
            [
              {
                _id: ObjectId('6a6b2e9c0800c203658ce5b5'),
                dogFriendly: true,
                isAvailable: false
              },
              {
                _id: ObjectId('6a6b35040800c203658ce5b6'),
                dogFriendly: true,
                isAvailable: false
              }
            ]

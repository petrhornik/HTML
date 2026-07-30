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

    - do update_data lze passovat více operátorů
      - $set: -> upravuje a přidává položky
      - $currentDate: -> vpodstate tzo samé jako current_timestamp v SQL
        - $currentDate: {lastModified: true}


        např.:
                animalShelter> db.cats.updateOne({age: 4}, {$set: {age: 6}, $currentDate: {lastModified: true}})
                ...
                animalShelter> db.cats.find()
                [
                ...,
                {
                    _id: ObjectId('6a6b35040800c203658ce5b6'),
                    ...
                    age: 6,
                    ...
                    isAvailable: false,
                    lastModified: ISODate('2026-07-30T11:43:23.462Z') // určuje čas poslední změny
                }
                ]

    3) replaceOne()

        => kompletně změní/přepíše obsah položky v objektu
        - funguje stejně jako update, ale to co vložím pomocí $set update querry tak jen to v objektu zůstane a zbyetk se smaže
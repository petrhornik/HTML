**Deleting (mazání) položek**

    => pro smazání položky/položek z kolekce

    1) db.collection.deleteOne()

        = pro smazání 1. položky co splňuje požadavky filter querry

        např.: 
                animalShelter> db.cats.find()
                [
                {
                    _id: ObjectId('6a6b2e9c0800c203658ce5b5'),
                    name: 'Mickey',
                    age: 18,
                    breed: 'Unknown',
                    dogFriendly: true,
                    isAvailable: false
                },
                {
                    _id: ObjectId('6a6b35040800c203658ce5b6'),
                    name: 'Betty',
                    age: 6,
                    breed: 'OrangeCat',
                    dogFriendly: true,
                    isAvailable: false,
                    lastModified: ISODate('2026-07-30T11:43:23.462Z')
                }
                ]
                animalShelter> db.cats.deleteOne({name: "Mickey"})
                { acknowledged: true, deletedCount: 1 }
                animalShelter> db.cats.find()
                [
                {
                    _id: ObjectId('6a6b35040800c203658ce5b6'),
                    name: 'Betty',
                    age: 6,
                    breed: 'OrangeCat',
                    dogFriendly: true,
                    isAvailable: false,
                    lastModified: ISODate('2026-07-30T11:43:23.462Z')
                }
                ]

    2) db.collection.deleteMany()

        = pro smazání více položek najednou co splňují filter querry

        např.:
                animalShelter> db.cats.deleteMany({isAvailable: false})
                { acknowledged: true, deletedCount: 2 }
                animalShelter> db.cats.find()
                
                animalShelter> show collections
                cats
                dogs

        - pro smazání/wipe celé kolekce použiju db.collection.deleteMany({})
          - po dokončení zbyte prázdná kolekce

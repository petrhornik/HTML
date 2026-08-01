**Další užitečné operátory**

    => další co se bude hodit

    1) odkazování na vnořené hodnoty v položce
        - pomocí klasickeho dotNotation
        - key-val musí být v tomto případě v "" či ''

        např.: 
                animalShelter> db.dogs.find({'personality.childFriendly': true})    //využití dotNotation jako když se odkazuju na položky v JS objektu
                [
                {
                    _id: ObjectId('6a6bd6769323c3463f8ce5b0'),
                    name: 'Rusty',
                    breed: 'Mutt',
                    age: 3,
                    weight: 25,
                    size: 'M',
                    personality: { catfriendly: true, childFriendly: true }
                },
                {
                  _id: ObjectId('6a6bd6769323c3463f8ce5b1'),
                 name: 'Chungus',
                  breed: 'Husky',
                  age: 3,
                  weight: 65,
                  size: 'L',
                  personality: { catfriendly: false, childFriendly: true }
                }
                ]

    2) matematické operace v finder query

        - viz.: https://www.mongodb.com/docs/manual/reference/mql/query-predicates/

        - definují se podobně jako v linux BASHi
          - $lt <- less than; $gt <- greater than; $eq <- equivalent, ...

        - umí od logických operací přes geopolitické, metody pro manipulace s arrayi(více položkami najednou), ...

        ukazka log. operatorů.:
                                animalShelter> db.dogs.find({age: {$gt: 5}}) // hodnoty vyšší než 5
                                [
                                {
                                    _id: ObjectId('6a6bd6769323c3463f8ce5b2'),
                                    name: 'Bella',
                                    breed: 'Chihuahua',
                                    age: 8,
                                    weight: 7,
                                    size: 'S',
                                    personality: { catfriendly: false, childFriendly: false }
                                }
                                ]

        - lze i kombinovat s equal
          -> $lte: <- less than or equal to (<=)
          -> $gte: <- greater than or equal to (>=)


    3) hledání položek na bázi toho jestli je obsažena urč. hodnota

        = pokud chci vybrat věci na bázi různých hodnot v 1 poli
        - lze specifikovat key-val: {$in [array_s_možnostmi]}   //pokud alespon 1 z moznosti v arrayi je u položky na miste s key-val, tak bude vybrana
        
        např.:
                animalShelter> db.dogs.find({breed: {$in: ["Husky", "Chihuahua"]}})
                [
                {
                    _id: ObjectId('6a6bd6769323c3463f8ce5b1'),
                    name: 'Chungus',
                    breed: 'Husky',
                    age: 3,
                    weight: 65,
                    size: 'L',
                    personality: { catfriendly: false, childFriendly: true }
                },
                {
                _id: ObjectId('6a6bd6769323c3463f8ce5b2'),
                    name: 'Bella',
                    breed: 'Chihuahua',
                    age: 8,
                    weight: 7,
                    size: 'S',
                    personality: { catfriendly: false, childFriendly: false }
                }
                ]

    např2(kombinace s 2).:

            animalShelter> db.dogs.find({breed: {$in: ["Husky", "Corgi"]}, age: {$lt: 5}})
            [
            {
                _id: ObjectId('6a6bd6769323c3463f8ce5b1'),
                name: 'Chungus',
                breed: 'Husky',
                age: 3,
                weight: 65,
                size: 'L',
                personality: { catfriendly: false, childFriendly: true }
            }
            ]
 
    4) pokud chci vybrat jen položky NEOBSAHUJÍCÍ hodnotu -> $nin (not in) 

            animalShelter> db.dogs.find({breed: {$nin: ["Husky", "Corgi"]}, age: {$lt: 5}})
            [
            {
                _id: ObjectId('6a6bd6769323c3463f8ce5b0'),
                name: 'Rusty',
                breed: 'Mutt',
                age: 3,
                weight: 25,
                size: 'M',
                personality: { catfriendly: true, childFriendly: true }
            }
            ]

    5) logické operace

        => $and; $or, $not, ...

        např.:
                animalShelter> db.dogs.find({$or: [{'personality.catFriendly': true}, {age: {$lt: 5}}]})
                [
                  {
                    _id: ObjectId('6a6bd6769323c3463f8ce5b0'),
                    name: 'Rusty',
                    breed: 'Mutt',
                    age: 3,
                    weight: 25,
                    size: 'M',
                    personality: { catfriendly: true, childFriendly: true }
                  },
                  {
                    _id: ObjectId('6a6bd6769323c3463f8ce5b1'),
                    name: 'Chungus',
                    breed: 'Husky',
                    age: 3,
                    weight: 65,
                    size: 'L',
                    personality: { catfriendly: false, childFriendly: true }
                  }
                ]

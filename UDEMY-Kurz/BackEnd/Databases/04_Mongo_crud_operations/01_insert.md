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


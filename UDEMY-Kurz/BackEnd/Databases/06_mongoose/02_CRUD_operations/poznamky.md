**CRUD operace s mongoose**

    => za proměnnou modelu lze volat CRUD operace jako v mongosh, pro manipulaci s daty v stejnojmenné kolekci
        -> myšleno stejný plurální název jako název modelu (NE proměnné)

   1) insertMany

        => na model lze zavolat naz_prom_modelu.insertMany([])
            -> všechny položky v arrayi se vloží do DB dle připojeného schématu

        - zastává stejnou funkcionalitu jako .save(), jen pro více položek najednou

        - dávám direct příkaz pro mongoDB proto zde nepotřebuji .save() jako u samostatných položek

   2) finding with mongoose

        => funguje podobně na styl promise a musí se awaitovat (asyncJS here we go again...)

        - místo promise vrací tzv. mongoose query

        - NAZ_PROM_MODELU.find({}) <- vrací celý mongoose query object celé kolekce

        - pouze data si vypíšu pomocí přidání .then()
          -> Movies.find({}).then(data => console.log(data)) //vypíše veškerá data v kolekci

        - jako v klas. MongoDB lze přidat do ({}) finder query/podminky hledání
            -> např.:  Movie.find({score: {$gt: 9.1}}).then(data => console.log(data))

        2.1) .findOne({})

            => .find() vždy vrací array i když je ve výsledku jen 1 položka, tak lze použít toto aby se rovnou vracel objekt

            - např.: Movie.findOne({year: {$lt: 1990}}).then(data => console.log(data))

            #tip -> i kdybych měl více položek splňujících podminku, tak se ve finále vrátí jen ta 1 co splňuje

        - existuje více způsobů jak to zapsat v mongoose
          -> rozdíl je v tom, že se callback passuje do .find() fce za finder array
          -> a taky by se mělo používat za metodou .exec() pro lepší trasování stacku (není nutnost)

        2.2) .findById()

            => lze vyhledat specifickou položku based on ID
                -> bude se hodit např při klikání v gui a filtraci co pullnout atd.

            -> např.: Movie.findById("6a6e60458a7d14dd5fe3aed7").then(data => console.log(data))
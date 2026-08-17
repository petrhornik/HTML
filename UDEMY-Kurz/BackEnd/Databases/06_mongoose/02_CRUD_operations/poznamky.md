**CRUD operace s mongoose**

    => za proměnnou modelu lze volat CRUD operace jako v mongosh, pro manipulaci s daty v stejnojmenné kolekci
        -> myšleno stejný plurální název jako název modelu (NE proměnné)

   1) insertMany

        => na model lze zavolat naz_prom_modelu.insertMany([])
            -> všechny položky v arrayi se vloží do DB dle připojeného schématu

        - zastává stejnou funkcionalitu jako .save(), jen pro více položek najednou

        - dávám direct příkaz pro mongoDB proto zde nepotřebuji .save() jako u samostatných položek

   2) finding

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

    3) updating

        !!! -> mongo při updatu nikdy nevrátí aktualizované položky, ale jen počet updatů provedených
                - na to mám tzv. "hybridní" metody
        !!! -> vždy používat .then callback jinak to nefunguje... nvm proč :D

        3.1) .updateOne({}, {})

            -> aktualizuje pouze 1. položku co splní selector/filter query
            - sytax -> např.: Movie.updateOne({FILTER_QUERY}, {UPDATE_QUERY})
              
              - Movie.updateOne({title: "Babovřesky"}, {score: 8.5}).then(res => console.log(res))
                
                - callback tam je z důvodu vrácení odpovědi ze serveru + mi to bez toho nefunguje
            
            - zpátky to vrátí kolik položek se aktualikovalo a pending promise

        3.2) .updateMany({}, {})

            -> aktualizací více položek/dokumentů najednou

            - např.: Movie.updateMany({title: {$in: ["Inception", "Babovřesky"]}},{score: 10}).then(res => console.log(res))
  
    4) deleting

        -> mazání položek/dokumentů z DB WOOOW
        - funguje vpodstatě stejně jako update, ale bere jen FINDER/FILTER_QRY

        !!! -> metoda .remove() je depricated

        - opět použe píše počet smazaných položek a nevrací dokumenty/položky ani další info

        4.1) .deleteOne({})

            - smaže konkrétní položku na bázi finder_qry
            - např.: Movie.deleteOne({title: "Pulp Fiction"}).then(res => console.log(res)

        4.2) .deleteMany({})

            - mazání všech položek co splňují filter_qry podmínky...WOOOOW
            - např.: 

    5) hybridní CRUD metody *(více fcí. zároveň)*
   
        -> zastavají více funkcionalit (většinou kombinace find a něčeho)

        5.1) .findOneAndUpdate()

            -> BY DEFAULT najde 1. položku co splňuje filter query, aktualizuje pomocí update query, vrátí položku ve stavu PŘED updatem a hned provede update

            - syntax: .findOneAndUpdate({FINDER_QRY}, {UPDATE_QRY}, {OPTIONS_QRY}).callback
            - aktualizovaný dokument se právě vrací v res z BE/DB

            - např.: Movie.findOneAndUpdate({title: "The Godfather"},{rating: "PEGI-18"}).then(res => console.log(res))

            - pokud chci aby to vracelo už updatovaný dokument/položku musím přepsat new v options na true
              -> obtions je objekt specifikovaný za UDATE_QUERY v () metody

                - např.:  Movie.findOneAndUpdate({title: "The Godfather"},{rating: "PEGI-16"}, {new: true}).then(res => console.log(res))

        5.2) .findOneAndDelete()

                -> hledanou položku smaže a následně ji vrátí v callbacku
                    - vidím co jsem smazal
                - opět dám pouze finder_qry

                - např.: Movie.findOneAndDelete({title: "Inception"}).then(res => console.log(res)


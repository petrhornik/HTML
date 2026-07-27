**MongoDB**

    => nejčastěji používaná DB ve spojení s NodeJS a ExpressJS
    - dobrá integrace s JS a jednoduché na pochopení
    - velká komunita

**instalace**

    - https://www.mongodb.com/docs/manual/administration/install-community/?operating-system=docker
    - lze zde specifikovat určitý OS a k němu se otevře i instalační wiki stránka
    - nainstalovat docker verzi, je to menší pain než na bare-metal

    - po instalalci se napojovat pomocí {mongosh --port 27017} NIKOLI {mongo}  //assuming the default values :D

**MongoShell**

    => defaultní CLI interface pro přímou interakci s MongoDB
        - jedná se o tzv. REPL interface

    - pro tvorbu, editaci, mazání, administraci, ... databází

    - cls = clearnout konzoli
    - db =  vypíše momentálně existující db ve které jsem
        + ji to píše i u kurzoru -> "test>"

    - defaultní databáze po pullnutí image je test
      - je jich více -> command -> show dbs

   1) tvorba DB

        use <db_name> = přepne do konfiguračního shellu pro tuto db
            -> pokud DB s danným názvem neexistuje, tak ji automaticky vytvoří  

        např.:
                test> use animalShelter
                switched to db animalShelter
                animalShelter> 

        - pokud hned použiju show dbs -> tak se zde neukáže -> zatím nic neobsahuje

        - pokud po vytvoření nic nepřidám a použiju use příkaz jinam, tak se DB opět automaticky smaže
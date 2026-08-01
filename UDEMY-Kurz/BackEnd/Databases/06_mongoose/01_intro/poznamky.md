**Mongoose** -> tool co budu používat pro propojení web. BE a MongoDB

    => object model wrapper
        - dokáže "mapovat"/převést příchozí dokumenty(položky) z MongoDB na JS objekty

    - umožňuje si vytvořit model z dat naší apl.
    - snadná validace dat a tvorba komplexních queries

    - můžeme si také předdefinovat schéma jak mají příchozí data vypadat a mongoose vždy data z DB dle schématu převede

    - docs: https://mongoosejs.com/docs/guide.html


   1) instalace a připojení

        => jedná se o basic NPM package
        - npm install mongoose

        - násedně si to zavolám pomocí CommonJS viz. index.js

        // const mongoose = require('mongoose');
        // mongoose.connect('mongodb://127.0.0.1:27017/<NAZEV_DB>');

        - handler pro kontrolu spojení se řeší stejně jako u promises

   2) Mongoose model

        => JS třídy (classes)
            -> konstruktor který pomocí připojené šablony je schopen manipulovat s daty v konkrétním formátu
            -> díky šabloně/schéma ví jak data v DB vypadají/jak je má do DB uložit

        - modelu musím vytvořit tzv. schéma
          -> reprezentace vzhledu dat v konkrétním dokumentu
          -> vytvořím pomocí -> new mongoose.schema({VZHLED dokumentu v DB})

        - při tvorbě modelu se k němu připojí schéma
          -> vytvořím -> mongoose.model("NAZ_MODELU", SCHEMA)
          -> následně data manipulována pod tímnto modelem budou mít vždy v DB stejný vzhled jako v připojeném schématu
          -> dle názvu modelu se mi vytvoří kolekce se stejným pluralizovaným názvem

        - následně pomocí těchto modelů provádím CRUD operace
          -> insert, find, update, delete/destroy


#tip -> soubory lze spouštět i z NODE konzole pomocí -> .load NAZ_SOUBORU
    - následně lze odtud i accessovat proměnné a data z tohoto souboru


        - položky vytvořené modelem lze následně uložit do DB
          -> NAZ_PROM_POLOZKY.save() 

        - pokud provedu edit položky a následně dám .save() znovu , tak se přepíšou upravená data a zbytek bude stejný
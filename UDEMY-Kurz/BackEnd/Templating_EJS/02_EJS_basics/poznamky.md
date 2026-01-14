**EJS config v ExpressJS**

    => express podporuje všechny templating formáty

    -> nastavím pomocí app.set() 
        -> 2 hodnoty -> key-val a hodnota
        -> pro nás -> app.set("view engine", "ejs") <- nelze specifikovat jinak i guess

        -> tip - existují i jinné hodnoty než view engine

    -> instalace: npm i ejs

    -> express počítá, že všechny templaty jsou uloženy ve složce views <- VYTVOŘIT SLOŽKU
        -> pomocí key-val views (/views je default)

**EJS basics**

    -> každý template soubor vypada-> naz_souboru.ejs
        -> sem píšu normal HTML + EJS syntax

    -> místo res.send() --> res.render() v response
        -> do () píšu jen string název .ejs souboru -> res.render("home");      that's it :D

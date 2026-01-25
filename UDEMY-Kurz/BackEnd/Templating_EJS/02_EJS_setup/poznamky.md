**EJS config v ExpressJS**

    => express podporuje všechny templating formáty

    -> nastavím pomocí app.set() 
        -> 2 hodnoty -> key-val a hodnota
        -> pro nás -> app.set("view engine", "ejs") <- nelze specifikovat jinak i guess <- bez tohoto to nebude fungovat (express musí vědět co a jak :D)

        -> tip - existují i jinné hodnoty než view engine

    -> instalace: npm i ejs

    -> express počítá, že všechny templaty jsou uloženy ve složce views <- VYTVOŘIT SLOŽKU
        -> pomocí key-val views (/views je default)

**EJS basics**

    -> každý template soubor vypada-> naz_souboru.ejs
        -> sem píšu normal HTML + EJS syntax

    -> místo res.send() --> res.render() v response
        -> do () píšu jen string název .ejs souboru -> res.render("home");      that's it :D
            -> BE vrátí celou .ejs stránku jako HTML jako odpověď na request

**ISSUE s views**

    => když spustím index.js mimo lokalitu kde je složka views tak nebude fungovat
        -> snaží se složku najít na místě kde je lokalita termilálu

    -> dá se pevně nastavit kde se složka views nachází
        - v index.js pomocí app.set('views', path.join(_dirname, '/views'))

    - musím si importovat path (manipulace s cestami a soubory)
      - _dirname -> sem se dosadí název složky ve které se index.js nachází
      - upravuje cestu k souborům
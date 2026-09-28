**Vytvoření vlastního MIDDLEWARE**

    = definování vlastního middleware pomocí app.use()

    -> fce. next() - aby se nám kód nezastavil v middleware a po jeho dokončení pokračoval dál
        - musím nejdříve definovat do () za req,res a potom na konec kódu v middleware se ()
        
        - např.: 
                    app.use((req,res,next) => {
                        --code--
                        next();
                    }) 

    - po zavolání next() v middleware už by neměl být zde žádný další kód
      -> pro prevenci lze psát na konci return next(); ale lze i normálně next()
        -> záleží na preferenci i guess.. 

**MIDDLEWARE more stuff**

    -> primárně užívám pro modifikaci příchožích requestů, či ověřování
        - např. autentizace uživatele, apod.

    - dá se nazvat vpodstatě "DEKORÁTOREM" requestu (přidává navíc věci či ověřuje request)

    - #tip -> middleware fci. si lze definovat bokem a pak ji jen passnout do app.use()
    
    -> v middleware mohu změnit i typ samotného requestu, např. při neúspěšné autentizaci uživatele
        - např.: z POST na GET apod.

    - pokud dám app.use za nějaký CRUD request tak se neprovede jelikož v 99% případů se v CRUD provede res.send() či res.render() -> zastaví provádění dál...

    - v middleware si lze specifikovat i "základní" cestu
        -> middleware se bude provádět pouze u requestů obsahujících tuto základní route + to co navazuje 

    - taky lze specifikovat či jen určitý text co může route obsahovat v jakékoli části apod. -> viz.: 


**Ukázka definování E404 cesty**

    = middleware lze použít i pro odkázání na tzv. e404 či jinnou error message
        -> pro případ neplatného/neexdistujícího requestu

    - vrací se v response v podobě statusu
      -> musím specifikovat až na konci před app.listen(), provede se po každém requestu a kontroluje jestli se vrátil status code 404 či jinný dle specifikace 
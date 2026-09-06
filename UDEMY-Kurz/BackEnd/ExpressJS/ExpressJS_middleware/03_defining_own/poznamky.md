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
    - 
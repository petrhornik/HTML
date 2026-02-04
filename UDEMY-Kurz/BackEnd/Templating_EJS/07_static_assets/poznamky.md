**statické sobury (static files)**

    => posínání více soubrorů (obrázky, videa, scripty, ...) na staru klienta (zpracovává je web. browser)

    -> nastavím pomocí middleware use -> app.use(express.static("public"))
        
        -> /public  <- sem uložit soubory () či do jinné
            -> složka se soubory musí být v root složce projektu
        
        -> dá odeslat více složek (příkaz se dá opakovat)

        - app.use se runne vždy u každého requestu (tzv. middleware)
          -> beží mezi request a response 
    
    -> v /public lze ukládat i celé složky -> přenesou se taky

    -> veškerý content je následně dostupný na clientu

**PROBLEM**

    => stejná problém jako u /views se spouštěním
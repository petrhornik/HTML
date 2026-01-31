**statické sobury (static files)**

    => posínání více sobrorů na staru klienta (zpracovává je web. browser)

    -> nastavím pomocí app.use(express.static("public"))
        -> /public  <- sem uložit soubory () či do jinné
            -> složka se soubory musí být v root složce projektu

        - app.use se runne vždy u každého requestu (tzv. middleware)
          -> beží mezi request a response 
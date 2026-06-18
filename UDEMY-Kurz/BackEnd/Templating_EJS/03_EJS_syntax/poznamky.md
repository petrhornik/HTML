**EJS syntax**

    - tagy
        -> <%= %> vrací output z toho co je uvnitř
                - uvnitř se dá psát classic JS

    - passování
        -> JS logiku lze praktikovat přímo uvnitř .ejs templatu
        -> nebo si ji napíšu bokem a následně ji passnu do templatu do () u res.render() se dá specifikovat objekt s passovanými hodnotami a key-valy
        
            res.render("naz_template", {key-val: naz_prom/hodnota}) <- na hodnotu v template se dá vždy odkázat pomocí key-val

        - při passnutí neexistující key-val dostanu error

        - lze passnout i hodnota bez key-val -> název proměnné hodnoty se použije zárověň jako key-val

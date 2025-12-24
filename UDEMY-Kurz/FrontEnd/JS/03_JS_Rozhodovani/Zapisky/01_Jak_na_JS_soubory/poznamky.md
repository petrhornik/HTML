**Jak spouštět JS ze souboru**
    - zde se uplatňuje RE => read, evaluate
        -> co se vyčte ze souboru se provede

    -  vytvořím si složku kam budu soubory ukládat
    -  vytvořím si basic index.html soubor
    -  vytvořím si soubor s pířponou .js -> např. app.js
    -  spojím .html a .js pomocí linknutí .js do html tagu <script> pomocí src="cesta_k_JS"
       -  viz.: index.html
    
    - <script> tag s odkazem vějšínou umisťujeme až na konec <body>

**Basic přikazy**
    = sada zákl. příkazů se ktyrými budeme začínat

    1) console.log()
        = vypíše do JS konzole to co bude obsaženo v ()
        např.: console.log("AHOJ") => AHOJ
        tip - console je objekt a pomocí . notationu si vytahujeme jednotlivé fce. 
            -> v našem případě log()

    2) alert()
        = vypíše obsah v () jako pop-up ve web. prohlížeči
        alert("AHOJ") => zobrazí se pop-up s textem

    3) prompt()
        = zobrazí se pop-up s žádostí o user input
        -> u inputu se může zobrazit text co definujeme do ()
        -> hodnota se default ukládá jako string
            -> lze uložit jako cokoli jiného pomocí parseInt()
                -> do () definujeme prom. obsahující string
        
        např.: z promptu => "90" => parseInt() => 90

    

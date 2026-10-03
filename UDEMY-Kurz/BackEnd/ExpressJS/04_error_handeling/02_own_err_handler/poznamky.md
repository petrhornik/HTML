**Vytvoření vlastního Error handleru**

    = vlastní middleware na zpracovávání chyb
        - pokud do funkce v app.use passnu 4 parametry 
           -> err, req, res, next

    - opět musím definovat na konec před app.listen

    - middleware se provede vždy, dyž cokoli vrátí error code

    - pokud budu chtít z middlewaru pokračovat dále, tak musím v next() specifikovat specifický error
      -> stačí passnout err z () funkce
      -> dojde k překreslení stránky, takže vypsané vyci middlewarem zmizí 

**Vytvoření vlastní err class**

    = vytvořím si vlastní třídu ve které specifikuju vlastní error objekt co si můžu potom opakovaně volat

    - lze psát manuálně pomocí res.status, ALE to je moc práce

    - pro vytvoření custom třídy si ji vytvořím jako extend z už existující Error třídy
      - lepší praktika je to zapisovat do samostatného souboru a potom to importovat do index.js (či app.js dle preference)

    - po vytvoření už jen importuju pomocí CommonJS či ES6 a používám místo Error

tip - v 90% případů pracuji s errory typu 500 a 400
tip2 - defaultní error handler detekuje i status, proto když v custom error class speicifikuju i to, tak to bude brát

**Úprava error stacku**

    = error v non-production prostředí vrací i tzv. error stack -> všechno co se vypisuje za error zprávou

    - dá se s tím také manipulovat když si ho upravím v app.use na konci kódu (viz. index)

tip3 - generic JS errory nemají status, dá se předejít nastavením tzv. defaultního statusu
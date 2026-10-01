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

    = vytvořím si vlastní třídu ve které specifikuju kdy se jaký err code bude vracet

    - lze psát manuálně pomocí res.status, ALE to je moc práce

    - pro vytvoření custom třídy si ji vytvořím jako extend z už existující Error třídy
      - 
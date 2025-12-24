**Scope**
    = viditelnost proměnných
        -> "tak kde nadefinuju prom. tak JEN TAM k ní budu mít přístup"
            -> např.: k vnořené prom. nemužu přistupovat mimo vnoření apod.

    1) function scope
        = prom. uvnitř fcí. NELZE používat mimo ně
        - viz.: 03_scopes/app.js
        - prom. definováné uvnitř fcí nemají žádnů vliv na ty "globální"
          -> nová prom. v fci může mít stejný nazev jako "globální"
            
            -> v tomto případě se dá přednost ve fci. té proměnné definované vně. a pokud neexistuje použíje se ta "globální"

    2) block scope
        = kondicionály if, else if, else, loopy, ...
        - block = všechno s {} <- kód uvnitř {} => vnořený kód
        - pokud uvnitř bloku vytvořím prom. tak také nelze přistupovat z "globálního" kódu souboru

        - var => lze definovat prom. v bloku co je accesable odkudkoli v souboru "globálně"
          -> dnes už by se NEMĚLO používat ale......well?

    3) lexical scope
        - nelze si zavolat. např. samotnou vnořenou fci. v jiné fci, ale zároveň nelze zavolat "parent" fci. aniž by v ní byla nějak volána ta vnořená
          -> vnořené fce. se kromě definování uvnitř parenta i volat

        - vnořená fce. má přístup ke stejným datům jako parent pokud nemá definované své vlastní
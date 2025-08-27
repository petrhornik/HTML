**JS objekty** -> object literal
    = kolekce dat, na každou položku se odkazuje pomocí klíčové hodnoty (key-val)
    
    - podobné jako array, ale místo indexu má každá hodnota svůj "název" skrze který se na ni odkazuje

    - syntax: const objekt = {naz_polozky: hodnota, ...}; 
     
      <- objekt mů že mít nekonečno položek

    - dobré pro přehlednost a jistotu, že se odkazuji na to co mám
    - každá položka musí mít key-value -> jen skrze něj se dá k hodnotě dostat

**tvorba objektu**
    -> tvořím const proměnnou s nějakým názvem
    -> za = přidám {} a ;
    -> do {} přidám hodnoty s jejich key-val -> key-val: hodnota, ...
    ->DONE

    - viz.: 01_basics
    - hodnoty ve stejném objektu mohou být jakéhokoli typu :D

**Přistupování k hodnotám v obj**
    = 2 zpusoby -> bracket notation []
                -> dot notation .

    - pokud spec. key-val neexistující hodnoty => undefined ....bych nečekal :D....
    - key-val, nemusí být jen text -> každá key-val je převeden v pozadí na string, proto ani čísla, key-wordy booleanů či jinných typů nejsou problém
      -> to NEZNAMENÁ že toto je good praktika + si musíme dát pozor na odkazování 

    1) bracket notation []

        - za název prom. objektu dáme [] a do nich specifikuju key-val v ""
        - syntax: prom_objektu["key-val"]
        - lze do [] specifikovat i jinné věci než key-val
          -> např.: jinné proměnné ve kterých je hodnota key-val, apod. 

    2) dot notation .

        - za název prom. objektu dáme . a za ní specifikuju key-val
        - syntax: prom_objektu.key-val

    - tip - všude stačí psát dotNotation -> VScode si to v případě potřeby sám převede na bracketNotation
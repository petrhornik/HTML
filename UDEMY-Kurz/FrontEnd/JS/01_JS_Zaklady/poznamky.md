**JavaScript (JS) - zaklady**
    = da web prog. lang

   1) Primitive types
        typy hodnot co se dají v prog. jaz. využít/se kterými se dá pracovat

        - number => číslo
        - string => textový řetězec
        - boolean => true/false -> rozhodovací
        - null => existující nulová hodnota
        - undefined => nedefinováno, hodnota neexistuje

- tip - zpracování úloh v JS
          -  REPL => read, evaluate, print, loop
          - program přečte úlohu, provede ji, vypíše ji a pokračuje dál
   
   1.1) Number
        - JS akceptuje jakýkoli druh čísla
        - v JS je pouze 1 typ pro všechna čísla (např. v C máme 2 typy)
        - přimo v JS lze provádět matemat. operace
            -> z hlediska bezpečnosti je doporučeno používat MathJS knihovnu

    1.2) boolean
        - hodnoty: true, false
        - pro rozhodování pravdy a nepravdy

 -tip - posloupnost(priorita max-min) mat. operací v JS
        -> PEMDAS => parentheses, exponents, multiplication, division, addition, subtraction
                    -> (), **, *, /, +, -

- tip - komentář v JS pomocí //

        - % => zbytkové dělení "modulo" -> výsledkem je zbytek po dělení
                -> např.: 12 % 5 -> 2 
        
        - NaN -> hodnota detekovaná jako číslo
              => říká: hodnota se kterou měl být proveden výpočet není číslem, proto celý výsledek není číslo 
   
   2) typeof
        = operátor co vrací typ dané hodnoty zadané za ním
        - např.: typeof 10 -> number; typeof "HELLO" -> string


   3) VARIABLES (proměnné)
        = přiřadení jména hodnotě pro opětovné použití

        3.1) let => proměnná která lze po deklaraci kdykoli a jakkoli měnit
                - např.: let year = 2025;
                - proměnnou updatujeme pomocí opětovného volání
                  - např.: year = year + 1; -> 2026 <- tímto stylem hl. u čísel
                  - většínou zapisujeme pomocí year += 1 (funguje pro všechny početní úkony)
                - během kódu se může hodnota mětit jakkoli typově (z čísla na string na boolean ...)

        tip - můžeme provádět početní úkony s různými čís. prom. a následně je zapsat do jinné prom.
            - např.: totalSum = myFirstNum + mySecondNum; atd.

        3.2) const => proměnná co po deklaraci už nejde nikdy změnit
                    -> neplatí u objektů a arrayů (nelze přejít z arraye na jinnou hodnotu, ALE do arraye lze přidávat a odebírat hodnota apod.)

        3.3) inkrementace a dekrementace
            = přičítání/odečítání 1 od čís. proměnné
            syntax: {NAZEV_PROM}++ / {NAZEV_PROM}-- <- nejdříve vrátí původní hodnotu a poté proběhne úkon
                    ++{NAZEV_PROM} / --{NAZEV_PROM} <- nejdřív se provede úkon, vypíše se už nová hodnota

        3.4) var => původní stará metoda pro tvorbu proměnných - NEPOUŽÍVAT!!!!!

   4) Jak pojmenovávat proměnné

    - nikdy mezery!!!!, nikdy nezačínat název číslem!!!!
    - vždy jednotný text
    - lze kombinovat více slov pomocí cammleCasingu či snake_casingu
      - cammelCasing -> nové slovo v názvu začne VELKÝM písmenem až na začátek! <- USE THIS!!!!
      - snake_casing -> oddělujeme slova pomocí _
    - vytvářet smysluplné názvy!
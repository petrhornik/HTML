**JS Rozhodování**
    = co se bude provádět na bázi pravdy a nepravdy(true/false)

    1) porovnávání velikosti
        = porovnávání velikosti hodnot (většinou 2, ale lze i více)
        -> rozhoduje se na bázi boolean (true/false)
        -> porovnávat se dají i písmena, ALE moc se to nedělá

        - prvky: 
                  >
                    -> zdali je 1. hodnota větší než 2.
                    např.: 3 > 1 => true; 1 > 3 => false
                  <
                    -> zdali je 1. hodnota menší nežli 2.
                    např.: 3 < 1 => false; 1 < 3 => true
                  >=
                    -> zdali je 1. hodnota větší nebo rovna 2.
                    např.: 3 >= 1 => true; 1 >= 1 => true 
                  <=
                   -> zdali je 1. hodnota menší nebo rovna 2.
    
    2) porovnávání rovnosti
        = porovnávání rovnosti/nerovnosti hodnoty
        - 2 druhy -> normální, striktní

        normální
            = porovnává jen na bázi obsahu hodnot
                - nebere ohled na to jakého typu hodnoty jsou
                - obě hodnoty to bere jako stejný formát
                - může vést k nečekaným výsledkům !
                    -> 1 == "1" => true
                        -> výsledek bude true(pravda) i když je 1. hodnota typu Number a 2. typu String

                prvky:   
                  ==
                    -> zdali jsou si hodnoty rovny z hlediska obsahu
                    např.: 1 == 1 => true; "1" == 1 => true !!!
                  !=
                    -> zdali si hodnoty nejsou rovny
                    např.: 1 != 2 => true; 1 != 1 => false

        striktní
            = kromě obsahu také porovnává jsou-li hodnoty stejného typu (number, string, ...)
                - stejné hodnoty různého typu budou false
                  - 1 === "1" => false apod.

                prvky:
                  ===
                    -> zdali jsou si hodnoty rovny hodnotou a typem výstup bude true
                    např.: 1 === 1 => true; 1 === "1" => false

                  !==
                    -> zdali si hodnoty nejsou rovny hodnotou nebo typem tak výstup bude true
                    např.: 1 !== 1 => false; 1 !== "1" => true
                    


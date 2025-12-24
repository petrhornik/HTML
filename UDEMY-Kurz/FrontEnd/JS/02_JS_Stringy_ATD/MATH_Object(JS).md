**Math Object/MathJS**
    = metody a propy(vlast.) pro mat. operace
    - already v JS, ready to use

    - metody
        - Math.round() <- zaokrouhlení. na celé jednotky by default
        - Math.abs() <- absolutní hodnota
        - Math.PI <- zastipuje číslo Pi (3.14...)
        - Math.floor(), <- vymaže desetinné místo a ponechá celé číslo (nezaokrouhluje!!!)
        - Math.ceil <- opak .floor -> po umazání dá navíc +1

        - Math.random() <- generuje náhodné desetinné číslo např.: 0.151315...
                        -> pro doražení celého čísla kombinujeme s Math.floor
                            > Math.floor(Math.random() * ROZSAH);

                            -> např.: ROZSAH = 6 (0-5); ROZSAH = 10 (0-9); ... 
                            -> pro rozsah začínající 1 přidáme +1 za poslední () -> Math.floor(Math.random() * ROZSAH) + 1;
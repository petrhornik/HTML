**Switch statement**
    = lze také použít pro nahrazení mnoha if podmínek
    - docela ez, ale kinda má weird syntax
    - viz.: 06 > app.js
    - 3 klíčová slova: switch, case a default
      
      -> switch => vytvoření celho switch statementu
            -> ke switch do () se volá prom. na bázi které se rozhoduje
      -> case => vytváření jednostlivých možností na rozhodování
            -> na konci case musíme VŽDY uvést break -> jinak se vypíšou i všechny ostatní case ležící za tou se splněnou podmínkou
      -> default => case co se provede vždy -> dáme vždy na konec switche, zastupuje else.
            -> nesmí být na začátku, provedl by se vždy
   
    - využivá se hlavně s čísly
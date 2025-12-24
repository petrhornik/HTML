**Cykly**
    = pro opakování urč. části kódu po určitou či neurč. dobu
    - používáme tzv. loopy: for, while, for...of, for...in

**For loop**;
    = opakuje jen pro urč. dobu/urč. počet opakování
    - viz: 01_forLoop

    - tvorba: for (initialExpression; condition; increment/decrement){};
      
      -> initialExpression => vytvoření čiselné proměnné použítelné jen pro tento konkrétní for loop např.: i; j; k ...
      -> condition => podmínka při které se bude cyklus opakovat pokud bude po zkončení stále platná např.: i < 10
      -> increm./dekrem => po každém provedení cyklu se provede přičtené/odečtení 1 od initialExpression 
        (v podstatě pokud chci aby se cykl provedl 10 tak se po každém provedení bude přičítat 1 než bude podmínka nesplněna a následně tedy po 10 opakování se už cyklus nespustí)

    - velmi často využíváno

**Infinite loop**
    = NOT GUD!!!!!!!
    -> nastane většinou špatným nastavením podmínky
    = loop co jede donekonečna bez možnosti zastavení
        -> zastaví se jen při zásahu usera ukončením programu
            -> zaplněním paměti/pádu prohlížeče či celého OS

    - vždy si dávat pozor jestli lze loop nějakým stylem BEZPEČNĚ zastavit
**nastavení state s updater fcí.**
    = poskytnutí updateru/funkce pro state fci., aby se mohla v jednotlivých úkonech předávala upravená hodnota z předchozího úkonu bez nutnosti opětovného renderování cel. komponentu

    -viz.: Counter.jsx

    - neměli bysme měnit state prom. s použitím původní hodnoty oné prom.
    
    - pokud by se s hodnotou původní prom. provádělo více úkonů zasebou tak se každy provede s onou původní hodnotou, NIKOLI s upravenou hodnotou z předchozího úkonu
        - jelikož se prom. typu state mění vždy až po přerenderování celého komponentu(dojde k opětovnému načtení state prom. jako takové)

    - updater syntax: např.: setCount(currentCount => currentCount + 1);
          - set_promenna(hodnota => hodnota + 1);

**funkce na inicializaci state**
    = funkce(nějaká logika) pro vytvoření počáteční hodnoty state

    - pokud mám nějakou složitou počáteční logiku, tak si jí můžu definovat do samostatné fce. v komponentu

    - pokud do useState do () zavolám fci. tak ta se spustí při KAŽDÉM přerenderování komponenty
      - state hodnota se změní, ale funkce se pustí tak jako tak
      - pro zamezení opětovného spoštění fce. si zavolám(passnu) jen jení název bez ()
          - react funci poprvé spustí a jako useState hodnotu se vezme její return a poté už ji nespustí

**kdy React provádí opětovný render?**
    = pokud jakákoli state prom. dostane jakoukoli NOVOU hodnotu
        - react porovnává hodnotu v state prom. jestli se změnila nebo ne
        - pokud se budu snažit nahradit hodnotu state stejnou hodnotuo tak re-render neproběhne!!

    - viz.: Counter.jsx
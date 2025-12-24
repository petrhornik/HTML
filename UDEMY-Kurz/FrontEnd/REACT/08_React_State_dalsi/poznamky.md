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

**Práce s objekty uvnitř state**
    = vytvoření 1 state proměnné pro více hodnot (objekt)
    - např. 1 prom. počítadla hodnot pro více hráčů
    - zobrazované hodnoty si voláme pomocí dotNotation jm_obj.nazev_hodnoty
    
    - react komponenta se nebude re-renderovat, protože react hlídá jen změny state prom. jako takové(její 'identitu' - jestli se jedná o ten samý objekt nebo byl nahrazen jinným) 
        -> obsah paměti objektu či arraye ho nezajímá!

tip - array je v paměti ukládán jako objekt

    - pro re-render musíme content původního objektu/arraye v state zkopírovat a umístit do nového obj. který se do state vrátí
      
      - vyplatí se používat spread -> {...nazev_puvod_obj} <- v paměti se jedná o jinný obj. než ten původní, ale obsahuje ty samé hodnoty

    - viz.: ScoreKeeper.jsx

**Práce s array uvnitř state**
    = vytvoření 1 state prom. pro více hodnot (array)
    - fungure na stejném principu jako objekty v state
    - viz.: EmojiClicker.jsx

**generování ID pomocí UUID - viz.: EmojiClickerIDfunc.jsx** 
    = každá hodnota v arrayi potřebuje unikátní identifikátor, aby jsme mohli k jednotlivým hodnotám přistupovat
        - káždá hodnota má svůj key prop.
            -> většinou z databáze odkud array s hodnot. importujeme

            -> v našem případě použijeme generátor UUID (npm package), pro vytváření ID (pro key prop) -> v našem emoji arrayi
                -> npm install uuid
    
    - káždá hodnota a arr bude objekt -> 1. hodnota bude ID vybenerované UUID a druhá bude ta naše hodnota v tomto případě emoji pic.

**mazání hodnot z arraye by React way - viz.: EmojiClickerIDfunc.jsx**
    =změna state při které se smaže nějaké hodnota z arraye
      - hodnota na kterou klikneme se bude mazat na bázi jejího ID

tip - aby se nám fce. spouštěla jen při triggernutí event handeleru, ale potřebujeme do ní passnout nějaké hodnoty zvnějška, tak použijeme arrow fci.
    -> syntax: onClick={() => nazev_fce(passovava_hodnota)}

    - pro mazají hodnoty z arr použijeme .filter fci.
        - ta se bude rovnat True pokud ID právě filtrované hodnoty není shodné s hledaným ID
  
**updatování arraye v Reactu - NEJVÍC COMMON WAYS TO DO IT**
    = jak aktualizovat obsah arraye(s vytvořením kopie arraye a v něm aktualizovat obsah = bez "mutace" původního arraye)
    - nedojde k úpravě původního arraye
    - viz.: NakupKosik.js
    
   # 1) přidávání hodnot
            = vytvořením nového arraye pomocí spread op. (...)
                - vezmeme obsah původního arraye a přidáme k tomu novou položku
   
   # 2) mazání hodnot
            = pomocí .filter a vyfiltrujeme pryč hodnotu s urč ID
                - celý array projede filterem a hodnota s hledaným ID se vyfiltruje pryč

   # 3) úprava všech položek v arrayi
            = pomocí .map a následné arrow fce., která se provede pro každou hodnotu/položku
                - .map zkopíruje veškerý obsah/položky arraye

   # 4) úprava konkrétní hodnoty/položky v arrayi
            = pomocí if, else a id oné položky, vytvoří se nový array kam se všechny položky vrátí a 1 či více def. v if se upraví dle toho co je v if nadefinováno
                -> resp. if id -> proveď změnu, else -> vrať nezměněný
                        <- provede se pro každou položku
    
   * tip - na React wiki je dostupná k tomuto tématu dokumentace

   
   # 5) třídění/řazení položek v arrayi (.sort  . reverse)
            = před použitím musím vytvořit kopii/nový array
                    <- nechceme aby to předělalo originál

    ! NEJDŘIV VŽDY VYTVOŘIT KOPII PŮVODNÍHO ARRAYE A TU TEPRVE UPRAVOVAT

**Update všech položek/hodnot v arrayi**
    - viz.: EmojiClickerIDfunc.jsx
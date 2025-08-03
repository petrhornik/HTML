**NavBar ala Bootstrap**
    = nejpoužívanější komponenta z Bootstrapu
    - responzivní navbar s hromadou možností customizací
    tip - dá se kromě <nav> vytvořit i pomocí <div> ale why...?

   1) inicializace
    
    -  <nav> musí mít class navbar <- pro inicializaci i guess...
    - do navbaru můžeme přidávat položky
            - a <- anchor tag
            - span <- pro texty
            - img <- obrázek
            - atd.
    
   2) přidání názvu do navbaru + barvy

    - nadpis by měl mít class navbar-brand
        - automaticky ho to umístí doleva a dá basic stylizaci

    navbar-{dark/light} -> změní barvu textu pro celý navbar(černá/bílá)
    bg-{barva} -> změna pozadí(primary, warning, danger, ...)

   3) přidání navigačního/nabídkového menu
    
    - uvnitř container-fluid pod navbar-brand si vytvořím div s class navbar-nav
        - inicializace nabídkového/nav menu v navbaru
            -> základní stylizace
            -> poté už přidávat jen jednotlivé a(anchor tagy)

        - ke každé položce v navbar-nav přidám classy nav-item, nav-link
        - pokud nechci aby se mi vypisoval sloupec, tak nejdřív celý navbar-nav umístit do divu s class collapse, navbar-collapse
            
            - collapse -> schování contentu, zobrazení se bude triggerovat např. tlačítkem, ...
        
        - pro zobrazení přímo v navbaru, např. na velkém displayi přidám do <nav> class navbar-expand-{VELIKOST (breakpoint)} < od jaké velikosti nahoru se má začít zobrazovat
        
        - pokud chci zobrazit collapsnuté menu, tak musím přidat např. tlačítko co bude zobrazení triggerovat
        - tlačítko musí mít class navbar-toggler
        - tlačítko a collapse div na sebe musíme napojit
            - u divu specifikujeme id
            - u tlačítka data-bs-toggle="" <- jaký prvek chceme "přepnout"
                                            <- v našek případě collapse
                        data-bs-target="{ID_DIVU}" <- napojení na div

   4) přidání formuláře do navbaru

        - do collapse divu si přidáme form s class d-flex
            -> aby byly všechny položky formu v 1 řádku
        - sem přidám už jednotlivé inputy/selecty/...

   
   5) pozicování navbaru v rámci celé stránky
        
        - fixed-{top/bottom} => na pevné umístění - zůstane připevněný na specifikovaném místě v rámci obrazovky!
            -> je vidět vždy - může překrývat content
        
        - sticky-top => panel bude zobrazován na urč místě na stránce
                                -> pokud dojde k tomu, že by při posouvání stránky už nebyl vidět přichytí se za horní okraj -> je vidět vždy
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
    
   2) přidání názvu do navbaru

    - nadpis by měl mít class navbar-brand
        - automaticky ho to umístí doleva a dá basic stylizaci

    navbar-{dark/light} -> změní barvu textu pro celý navbar(černá/bílá)
    gb-{barva} -> změna pozadí(primary, warning, danger, ...)

   3) přidání navigačního/nabídkového menu
    
    - uvnitř container-fluid pod navbar-brand si vytvořím div s class navbar-nav
        - inicializace nabídkového/nav menu v navbaru
            -> základní stylizace
            -> poté už přidávat jen jednotlivé a(anchor tagy)


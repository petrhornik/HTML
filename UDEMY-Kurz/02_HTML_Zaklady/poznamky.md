**Uvod**
        = určuje strukturu web. stránky, říká kde co je
        - jedná se o hyper text markup lang. = není to typický program. jazyk, funguje podobně jako psaní dokumentu <- přidávání informací navíc, zváraznění, rozčlěnění textu, tabulky, ...
                - formátuje obsah stránky
                - tvoří strukturu webu - obsahuje informace dle kterých web. prohlížeč formátuje texty či jakýkoli obsah ve stránce 

**Elementy**
            = pro formátování obsahu v HTML(podobně jako u word dokumentu ALE trochu jinak :D)
            <p> - obyčejné texty/paragrafy
                - mužeme pomocí nich oddělovat texty do tzv. bloků
            <h1>, ..., <h6> - nadpisy
            <img> - obrázek
            <form> - vyplňovací formulář
            <b> - styl písma bold
            <i> - styl písma italic

            syntaxe např.: <p>nejaky text<\p>

                - pro zakončení elementu musíme uvést do 2. závorksy\
                    tip - vscode doplňuje automaticky
                - pokud nukončíme element tak se vlastnosti elementu uplatné na vše za jeho otevřením
                    
                    např.: <p>nejaky text j.......

tip 
    - na stránce by vždy měl být jen 1 hlavní nadpis <h1> a to nahoře např. jako název stránky

**MDN**
        = dokumentace HTML, CSS, JS od mozilly
        - bude se hodit :D

**Chrome Dev Tools**

                    = nabízí několi různých nástrojů
                    - můžu si zobrazit jednotlivé elementy na stránce v kódu se všemi paramnetry
                    - můžu uravit obsah stránky -> po obnovení stránky se smaže

**Kostra HTML (boilerplate)**

            = základní struktura kteru MUSÍ obsahovat každá web. stránka
             <!DOCTYPE html> - toto musí obsahovat každý web
             <html> - nejvyšší elemet, sem se píše všechno
             <head> - to co na stránce není vidět, ale je potřeba
             <title> - píšeme do head - název stránky v kartě prohlížeče + vyhledávače jako např. google vyhledávají webu na bázi jejich title
             <body> - zde se nacházi viditelná část webu(text, obrázky, ...)

             - psát to manuálně? NE!!! - při založení webu napiš ! a dej Enter/Tab Voilá!

**Automaticke formatovani vscode**
            - otevřu příkazové pole Ctrl + Shift + P
                - format document
            - nebo Shift + Alt + F
            tip - rozšíření Prettier je very gut :)

**Listy**
        - druhy   <ol> - číslovaný list
                  <ul> - nečíslovaný list
        - v listech se zapisují do <li> - list item
                - čí do <scripts> nebo <template> - nedělali jsme
                - nic jineho sem nejde
        uvnitř <li> už může být cokoliv (např.: klidně i list do listu XD)
                
tip - pokud chci zkopírovat ten samý řádek pod či nad sebe tak použiju ALT + SHIFT + sipka nahoru/dolu
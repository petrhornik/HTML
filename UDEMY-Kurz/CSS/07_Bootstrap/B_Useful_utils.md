**Other useful Bootstrap utils**
    = užitečné utils co se mohou hodit

   1) border
    = nastavení borderu(ohraničení)
    - inicializuji pomocí class border (povinnost pokud chci používat border)

    -  lze specifikovat jen urč. strany border-{strana}
                                                    - top, bottom, left, right
    
    - nastavení velikosti
      - syntax: border-{VELIKOST}
      - velikost: 0-5

    - nastavení barvy
      - syntax: border-{BARVA}

    - zaoblení okrajů
      - syntax: rounded-{VELIKOST}

   2) shadow
    = stín za komponentem
    - inicializace class: shadow, shadow-sm, shadow-lg, shadow-none
    - vice: https://getbootstrap.com/docs/5.3/utilities/shadows/

   3) spacing
    = margin a padding -> class m, p
    - syntax: m/p{STRANA}-{BREAKPOINT}-{VELIKOST} 
      -> např.: mt-md-3 <- margin-top, breakpoint od medium, velikost 3 "jednotky"
    
    tip - pro left a right se používá - s (start), e (end)  !!
        - existuje i pozicování na X a Y ose => padding/margin z obou stran :D

    - strana a breakpoint jsou nepovinné
      -> samotný m/p se projeví na všech stránách a na všech velikostech obrazovek 
    
    nice to know -> sizing, display property, flex,
        viz.: https://getbootstrap.com/docs/5.3/utilities

        - cards => komponent karty obsahující  nějaké prvky (obrázek, heading, text, button, ...)
                  - lze přidat list-group atd.
        
        - carousel => cyklus elementů (hl. obrázků), využíván hodně!
                    - např.: prezentace headlign na novinářských stránkách atd.
        
        - dropdown menu => menu co se může např. přidružit k nějakému inputu
                        - otevírací nabídka s hodnotami/odkazy/...
        
        - spinner => "widget" spineru (klasik loading.. animace)

        - modals => pop-up dialogy
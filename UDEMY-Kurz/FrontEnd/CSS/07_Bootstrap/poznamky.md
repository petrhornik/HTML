**Bootstrap**
    = CSS framework
        - nástroj pro snažší a rychlejší CSS stylizaci + něco málo z JS
        + rychlejší provedení responzivního designu
        - celá stylizace probíha čistě skrze přidávání class="" komponentům
            - CSS píšeme jen pro vlastní styl či úpravu B.
    
    - 2 hlavní části
        - Komponenty => předvytvořené komponenty co můžeme zakomponovat na náš web
                     - např.: button, nav bar, ...
                     - umožňuje upravitelnost + můžeme přepsat vlastním CSS
                     - responziv. design included from the start
        
        - Grid System => systém, který pomohá navrhovat náš vlast. responzive layout(y)
                      - např. když máme web rozlišený na urč. části (např. header, content, sidebar, ...)
                            - nastavíme co a jak se má srovnat, co má být jak velké, ... (např.: při urč. max-width apod.)
                      - 
    
    -  URL dokumentace.: https:\\getbootstrap.com !!!!!!!!

    - aktivace bootstrapu pro použití
        1) stáhneme a vložíme mezi soubory webu - nsledně importujeme (podobně jako stylesheet)
        2) importujeme přes web URL odkaz - díky CDN(content delivery network) a JSDelivr

**Bootstrap ukázky CSS komponent**
    = ty které jsou nutné/nejčastěji používané

    1) container
        = nejzákladnější element pro layout
        - povinost - pokud chci použít gird system
        -> je v něk obsazěn nějaký content který chceme pozicovat jako celek
        - má default přednastavené breakpointy
            - předlastavený responzive design
    
        1.1) container-fluid
            = má pouze minimální margin
            - chvá se podobně jako by tak container vůbec nebyl
        
        1.2) container-[velikost]
            = container se bude roztahovat jen do urč. velikosti
            - sm, md, lg, xl (small,medium,large,extra large)

    tip- barvy v Bootstrapu
            -primary, secondary, success, danger, warning, info, light, dark, white
            - barvy jsou předdefinované, ALE dají se skrze naše vlast. CSS měnit

    2) btn (button)
        = CSS presety pro tlačítka
        - barvy, velikosti, designy,...
        - nejdřív vždy musíme přidat do class="" samostatný btn "pro aktivaci stylizace tlač. i guess..."

        2.1) barvy
            = barvy se deklarují pomocí samostatných názvů CSS komponent
            syntax: btn-{BARVA} -> např.: btn-primary
            - viz.: index.html

        2.2) styly outline
            = styl tlačítka - barevný pouze berder
            syntax: btn-outline-{BARVA} -> např.: btn-outline-primary
        
        2.3) velikost
            = default je velikost medium
            syntax: btn-sm <- smol, btn-lg <- large

        2.4) disabled
            = znemožní kliknutí na tlačítko(deaktivuje ho)
            - syntax: disabled <- samostatný atribut

    3) badge
        = pro zobrazování nějakého labelu u obkazu/tlačítka
        -např.: počítadlo stiskunutí, upozornění, atd.
        - přidáveme vedle textu tlačítka jako span s class="badge"

        3.1) background color
            syntax: text-bg-{BARVA}

        3.2) tvar oválu
            = změna ze čtverce na ovál
            syntax: rounded-pill

    4) button groups
        = více tlač. uzavřem do 1 divu a divu dáme class="btn-group"
            - tlačítka se seskupi v 1 "bar"
        - tip - vždy be se mělo divu zároveň nastavit role="group" !
                    - hl. pro screen readery
        
        - další stylizacee viz.: getbootstrap.com
         
    5) alert
        = okno např. když odcházím z webu kde mám neuloženou práci, data se (ne)úspěčně uloží, uvítací zpráva atd.
        - okno s účelem připoutat pozornost
        - může obsahovat paragrafy, heading, atd.
        
        5.1) dismiss
            = schopnost alert zavřít
            - do class="" u alertu přidáme alert-dismissible (místo pro tlač.)
            - přidáme button a přidáme vlastnost data-bs-dismiss="alert"
                - voláme JS fci co alert uzavře (udělá ho neviditelným)
                - dale přidáme class="btn-close" <- symbol X
            - fade a show <- pro plynulost přechodu
            -viz.: index.html


**Bootstrap typografie - upravy contentu**
    = B. má default přednastavenou stylizaci pro veškeré texty
        - samozřejmě se dá upravit!
    
    - komponenty B. typografie
        
        1) display
            = úprava velikosti textu (rozsah 1-6)
             syntax: display-{HODNOTA} -> např.: display-4
        
        2) lead
            = zvýrazněje texty i guess...
            syntax: lead <- umístím do class=""
            - viz.: index.html

        3) blockquote
            = element v html + B. stylizační komponent
            - slouži k umisťování citátů/textů z jiného zdroje

            3.1) blockquote-footer
                = vzhled pro přidání např.: autora citátu/textu

        4) zarovnání textu
            = pozicování
            syntax: text-{POZICE} -> např.: text-center

            pozice -> center, left(default), end(místo right)
            
**Bootstrap utilities**
    = zajišťují základní funkčnost (např.: zarovnání, barvy, ...)
        - vždy u něčeho - NIKDY samostatně

    - ukázky utilit:
            
            1) colors (barvy)

                1.1) text-{BARVA} <- určuje barvu textu u komponenty
                1.2) bg-{BARVA} <- nastaví backgroud color u komponenty





    
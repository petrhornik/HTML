**Selektory v CSS**
    = výběr konkrétních částí stránky pro stylizaci zvlášť = určuje jakou část html stylizujeme

    1) univerzální - *
        = stylizujeme UPLNĚ VŠECHNO! (veškeré elementy)


    2)elementové selektory - h1, button, section, nav, ...
        = stylizujeme nějaký urč. element (stylizujeme vždy VŠECHNY elementy na stránce, které jsou stejnéch druhu)

- tip - pomocí , můžeme kombinovat několik selektorů dokupy a spol. je stylizovat najednou (např. h1, h2{}  <- stylizujeme všechny h1 i h2)

    3) ID selektor
        = asociace CSS a HTML atributu id="", lze použít vždy jen u 1 POLOŽKY!!
        - můžeme stylizovat elementy pomocí jejich id=""
        - CSS píšeme #{nazev_ID}{}

        např.: HTML: <input type="text" placeholder="search" id="search">

                        |                   |                   |
                        V                   V                   V
                CSS: #search{}

    - tip - každé id="" by mělo mít unikátní "název" (použitý jen 1)

    4) Class selektor
        = podobné jako ID, ale lze použít pro VÍCE POLOŽEK ZÁROVEŇ!!
        - nejpoužívanější
        - asociace HTML atributu class="" a CSS .{nazev_class}{}

        např.: HTML: <span class="tag">funny</span>
                        |           |           |
                        V           V           V
                CSS: .tag{}
    
    5) podselektor (descendant selector)

        = selektujeme něco co je v něčem vnořené
        - např.: li a {} <- upravujeme jen anchor tagy co jsou vloženy v li
        - pokud chci např. stylizovat jen odkazy uvnitř nav. panelu apod.
        - můžeme stylizovat obecně i specificky na nějaký section/div (pomocí class selektoru)

    6) adjacent selektor

        = selektujeme jen ty elementy co se nachází za nějakými jinými konkrétními elementy (např. všechny p co se nachází hned za h1)
        - musejí se nacházet na stejném "levelu" - upravované p nesmí být vnořeno v h1 apod.
        - např.: h1 + p {}

    7) direct child selektor
        
        = vybere jen ty elementy co jsou vnořeny přímo v onom divu nikoli ty co jsou sice v onom divu, ale jsou vnořeny ještě v nějakém elementu uvnitř onoho divu
        - pokud div > a - tak se vybere a přímo v divu, ALE a nacházející se v li, které se nachází v onom divu už se nevybere

    8) attribute selektor

        = vybíráme na bázi atributů(vlastností) co jsou obsaženy v onom elementu co chceme upravit
        např.: input[type="text"] <- upravujeme všechny inputy co jsou typu text
        - tip - pokud chci vybrat sekci dle class, ale mám např stejně pojmenované divy tak mohu použít: section[class="item"]  <- WELL....OK
                - alter. zápis: section.item <- to samé

**Pseudo třídy**
    = keywordy co se přidávají za selektor začínají vždy :
    - používají se k úpravě vybraného elementu v urč. spec. případech (např. při kliknutí na element, najetí myší, pokud je první ze všech, ...)

    1) :hover

        = použije stylování elementu, POKUD ja element najedeme myší
        - např.: a:hover <- stylování se použíje pokud na jakýkoli a tag najedeme myší

    2) :active

        = stylizace so použije pokud kliknu na element a držím (element je v "aktivním" stádiu)
        -např.: button:active <- změníse jen v případě kliknutí a držení

    3) :checked

        = hl. pro checkboxy, jestli jsou zaškrtnuté tak se uplatní styl
        - např.: input[type="checkbox"]:checked {}
        - v případě tlačítka typu radio se styl uplatní jen na to vybrané
    
    4) :nth-of-type

        = vybírání elementu na stylizaci s ohledem na jeho pořadí uvnitř nějaké skupiny ve které se nachází
        - např.: .item:nth-of-type(3) <- vybere se pouze 3. element z celé skupiny elementů obsahujících class="item"
        -tip - .item-of-type(3n) <- odpočítá si a vyzere KAŽDÝ 3. element ve skupině
    
    ...

**Pseudo elementy**
    = keywordy co se přidávají za selektor začínají vždy ::
    - dovolují stylizovat jen urč. část vybraného elementu (písmena, řádky, ...)

    1) ::first-letter

        = změní 1. písmeno ve vybraném elemntu
        např.: h2::first-letter{}
    
    2) ::first-line

        = změní 1. řádek ve vybraném elemntu
        např.: p::first-letter{}
    
    3) ::selection

        = změní se stylizace(pozadí) vybraného textu např. v paragrafu
        např.: p::selection{}

**Cascade (posloupnost/složení)**

    = záleží na tom jak jsou jednotlivé prvky stylizace poskládány zasebou
    - např.: pokud budu mít 2x stylizace barvy h1 nejdřív fialovou a potom červenou, tak finální barva h1 bude červená!!
    - tip - pokud vytvořím další css co bude linknuté v head pod tím původním a v něm budu stylizovat něco co už je stylizováno v tom předchozím, tak i přes to se použíjí ty styly z toho dalšího

**Specificity**

    = na bázi tohoto se prohlížeč rozhoduje jaké styly pro element použije pokud jich odkazuje více stejného typu
    - záleží na tom jak moc specificky se na element odkazuje
    - vždy vyhraje ta stylizace co se odkazuje co nejvíce specificky
    - např.: 1).item button:hover { color: green; } 
             2) button:hover{ color: red; }

                - tlačítka uvnitř elementů s class="item" zůstanou zelená i když dle cascade by se všechna tlačíska změnit na červenou
                - důvodem je že je specificky zadáno že všechna tlačítka v elementech s class="item" mají být zelená a ta stylizace pod tím se odkazuje všeobecně na všechna tlačítka všeobecně!!!!

    - vzorec: ID > CLASS > ELEMENT (co má větší specifičnost(vyšší stylovací prioritu))

            - čteme zleva doprava a na bázi počtu selektorů
            - skóre priority(za každý sel zvlášť):
                ID sel. +100
                CLASS/Atribut/pseudo-class +10
                element/pseudo-element +1
            
            např.: #submit{} - skóre priority: 100
                    .item p - skóre priority: 11
                    h1 - sóre priority: 1
                    nav a:active {} - skóre priority: 12
    
    - tip - kalkulačka specificity priority: https://specificity.keegan.st/
    - tip#2 - nikdy nesčítat čísla (1 2 24 < 1 3 13)

**Dev Tools**

    - když vyberu element v dev tools tak dole pod záložkou styles vidím co za styly se aplikuje
        - přeškrtnuté položky = mohly by se použít, ale "nevyhrály" z hlediska specificity či cascade
        - css u jednotlivých položek ve styles se dá měnit

**Inline styles**

    = nejvíce specifická věc (ještě víc než ID selektor)
    - pokud píšeme stylizaci přímo do atributu style="" uvnitř onoho elementu s .html souboru
    - např.: <button id="butt1" class="IDK" style="color: red;">AHOJ<button>
        - tlačítko bude mít červený text jelikož style="" prioritou přebije uplně všechny selektory v .css

**!important**

    = říká prohlížečí aby tuto položku přepsal jako nejvyšší prioritu ať už je v jakémkoli selektoru
    - přidává se za nastavení nějakého stylu jako variable
    - např.: color: red !important;

**CSS dědičnost (inheritance)**

    = některé CSS prostředky budou "zděděny" child (vnořenými) elementy onoho hl. elementu, pokud nejsou specificky nastaveny
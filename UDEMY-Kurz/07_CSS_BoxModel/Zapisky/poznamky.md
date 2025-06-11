**CSS BOX MODEL**
    = každý element upravovaný v CSS se nachází uvnitř nějakého boxu
    - vše v CSS je tvořeno z boxů, každý element se nachází uvnitř nějakého boxu
   #  má několik vrstev:
        1) innterContent box
            = zde je umístěn element/skupina elementů (zodrazuje obsažené informace)
            - funkce width a height <- upravuje výšku a šířku "contentu"/innterBoxu
                - default je width vždy 100% a height se definuje dle obsahu v boxu
        
        2) padding
            = mezera mezi innerBoxem a borderem (prázdná výplň uvnitř)
            - zadáváme pro každou str. zvlášť nebo vše kombinujeme do 1
            - vlastnosti:
                - padding-left
                - padding-right
                - padding-bottom
                - padding-top

                - kombinace
                
                    - padding: všechny_směry;
                    - padding: vertikalni horizontalni;
                    - padding: top horizontalni bottom;
                    - padding: top right bottom left;  <- nejčastěji používané

                - dobré např. pro zvětření okraje tlačítka apod.

        3) border
            = viditelný okraj boxu
            - můžeme upravit styl, barvu, tloušťku, zakulacení rohů boxu,...
            - vlastnosti:
                - border-width <- tloušťka
                - border-color <- barva
                - border-style <- styl/vzhled (např. solid, dotted, dashed,...) - styly se dají kombinovat dokupy např.: border-style: dashed solid;
                -border-radius <- zakulacení rohů viz. boxModel.css
            
            --- VŠE SE DÁ DEFINOVAT DO 1 VLASTNOSTI ---
            border: width style color; <- řazení

            - tip#2 - vlastnosti se dají definovat i konkrétní straně okraje viz. boxModel.css
            - tip#3 - border-radius: 50%; = kruh , border-radius umí i zakulacovat jednotlivé strany a rohy atd.
            - tip#4 - box má vždycky border (když není nadefinovaný není vidět)


        4) margin
            = vně borderu elementu, mezera mezi ementem vůči jiným elementům(prázdná výplň vně)
            - definujeme stejně jako padding
            - vlastnosti: - stejné jako padding (stejná syntaxe)
            - tip - některé elementy mají margin build in (např. body, h1, ...)



 - tip#5 - box-sizing: border-box; <- border je zahrnut ve width i height spol. s innerBoxem

**Vlastnost Display**
    = jak se bude k elementům přistupovat (block, inline, flex, grid)
    - nastavuju vždy u rodiče, uvnitř kterého chci dle onoho Display věci upravovat
   # zákl. hodnoty:
        
        - inline <- elementy se rovnají do řady a width a height je ignorován
                <- margin a padding posouvá elementy jen horizontálně!
        
        - block <- rozbijí tok dokumentu. margin, padding, width, height jsou respektovány
        
        -inline-block <- chová se jako inline, ale  margin, padding, width, height jsou respektovány

        - none <- shová element

**CSS Jednotky**
    - 2 skupiny - absolutní (px, pt, cm, in, mm)
                - relativní (em, rem, vh, vw, %, ...)

    1) procenta %
        = vždy relativní vůči jiné hodnotě
        - záleží na tom vůči čemu % nastavujeme
            - vůči rodiči elementu (např. u width)
            - vůči urč. hodnotám přímo onoho elementu (např. u line-height vůči nadefinovanému font-size)
        
    2) em
        = relativní jednotky
        - upravuje hodnoty vůči těm co jsou nadefinované v rodiči elementu či vůči těm co obsahuje přímo onen element
             1em <- stejná hodnota jako v rodiči (např. stejná font-size)
             2em <- dvojnásobná hodnota oproti rodiči
        
        - změní svou velikost(škálování) dle toho kde se nachází

        - např. margin použije hodnotu font-size onoho elementu kde definujeme

        - NEPOUŽÍVAT U NESTED KOMPONENT!!!!!
        
        -tip - vhodné pro užití u stylování textu v article či marginů nebo i u tlačítek aby po změně vel. byly stejně zakulacené rohy

    3) rem (root em)
        = relativní vůči elementu root html font-size!!!
            - jak elementy vypadají vůči nastavení celkového dokumentu
        - mění se konstatně - NIKDY ne v závislosti na rodičích
        - pokud je root font-size: 20px; -> 1rem = 20px, 2rem = 40px, 0.5rem = 10px, ...
        - jednodušší na předvídání

        -element root html je <html lang="en">
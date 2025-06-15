**FLEXBOX**
    = druh pozicování elementů v řádcích nebo sloupcích
    - dynamická distribuce místa mezi elementy s neznámou velikostí
    - skládá se z několika vlastností
    - pro nastavení pozicování FLEX použijeme display: flex; na elementu UVNITŘ kterého pomocí flexu chceme pozicovat elementy
    - vše je pozicováno dle tzv. hlavní osy co určuje směr toku elementů
    - přechodová(křížící) osa pak určuje jakým směrem se bude provádět wrap pokud je povolen (osa je na hl. kolmá)

    vlastnosti:

        1) flex-direction: ;
            = rozhoduje odkud-kam povede hlavní osa (rozhoduje směr toku elementů)
            -default nastaveno na row <- zleva-doprava (default)
            - definuje se do elementu uvnitř kterého pozicujeme
            -hodnoty: row, row-reverse, column, column-reverse
    
    tip - elementy pozicované flexem nikdy nepřesáhnou hranici elementu ve kterém jsou pozicovány, i za cenu že se nedodrží jejich pevně def. velikost

        2) justify-content: ;
            = určuja jak je obsah(ementy) rozložen na hlavní ose (flex-direction)

            hodnoty:
                
                2.1) flex-start <- obsah se rovná po směru osy a od jejího začátku (default)

                2.2) flex-end <- obsah se rovná po směru osy, ale od jejího konce

                2.3) center <- obsah se "vycentruje" na hl. ose

                2.4) space-between <- mezi jednotlivými elmenty budou stejně velké mezery vypočítané z veškerého zbylého voln. místa na hl. ose až na venkovní okraje

                2.5) space-around <- každý element má okolo sebe stejně místa bez ohledu na to kde se na hl. ose nachází

                2.6) space-evenly <- mezery mezi elementy na hl. ose budou všude stejné

        3) flex-wrap: ;
            = určuje pokud budou vel. elementů v 1 řádku/sloupci větší než celk. rodič, jestli se "přečnívající" část může posunout na nový řádek či ne (obalování stránky)

            hodnoty:

                3.1) wrap
                    = povolení wrapu

                3.2) wrap-reverse
                    = otočí přechodovou osu a povolí wrap

                3.3) nowrap 
                    = zakáže wrap (default)
            
            - dá se otestovat v flexbox.css

        4) aligh-items: ;
            = určuje jak je obsah(ementy) rozložen na přechodové ose (flex-wrap)
            
            hodnoty:

                4.1) flex-start <- zarovná veškeré elementy na začátek osy (default)

                4.2) flex-end <- zarovná veškeré elementy na konec osy

                4.3) center <- obsah se "vycentruje" na přechod. ose

                4.4) baseline <- zarovná se dle textu obsaženého v elementech, aby text byl v rovině

        5) align-content: ;
            = urč. rozložení(mezery) mezi jednotlivými sloupci či řádky (pokud je aktivní flex-wrap, jinak nedělá nic)

            hodnoty: <- stejné jako u justify-content/align-items
                        <- ale uplatňují se na celé sloupce/řádky
        
        6) align-self: ;
            = určuje zarovnání jednotlivých elementů
            - píšeme vždy k urč. elementu

        7) flex-basis: ;
            = definuje počáteční velikost elementu před rozdělením dalšího prostoru na hl. ose
            - zastupuje width nebo height elemntu na bázi flex-direction

        8) flex-grow: ;
            = určuje množství vol. místa co element zabere pokud je volné místo dostupné
            hodnoty: čísla bez jednotek

        9) flex-shrink: ;
            = určuje rychlost smršťování elementů, kdev v rodiči není dostatek místa
            hodnoty: jako u flex-grow

        10) flex: ;
            = obecná vlastnost do které se všechny předchoží dají kombinovat
            - najednou lze zadat max 3 hodnoty a to jen v 1 případě
                flex: flex-grow | flex-shrink | flex-basis; (např.: 1 1 10%)
            - v případě 2 hodnot -> flex-grow a flex-basis/flex-shrink (záleži na jednot.)
            - v případě 1 hodnoty je to jedno co definujeme

**Responzivní design**
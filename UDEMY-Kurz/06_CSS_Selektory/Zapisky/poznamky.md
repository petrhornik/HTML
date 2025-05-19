**Selektory v CSS**
    = výběr konkrétních částí stránky pro stylizaci zvlášť = určuje jakou část html stylizujeme

    1) univerzální - *
        = stylizujeme UPLNĚ VŠECHNO! (veškeré elementy)


    2)elementové selektory )- h1, button, section, nav, ...
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

        
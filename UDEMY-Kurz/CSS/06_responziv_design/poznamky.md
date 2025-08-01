**Responzivní design**
    = 1 web. stránka pro více velikostí obrazovek (pc, laptop, mobil, tablet, ...)

**Media queries**
    = možnost modifikace stylu na bázi např. šířky obrazovky, typu zařízení, atd.
    -syntax: @media (max-width: 800px){

    }
        - styl bude použit na obrazovkách o vel. >= 800px

tip - v devtools lze otevřít prewiew stránky na různých zař.

    - nejpoužívanější atributy: 
        - min-width - použije styl pokud splněna min. šířka obrazovky
        - max-width - -||- max. -||-
        - orientation - rozpoznává jak je zař. "natořeno" - hl. u mobilů (landscape, portrait)

    - viz.: style.css

    - pozor na pořadí stylizovacích prvků
        - pokud si dám max-width: 400 a pod něj max-width: 1000px - tak bude fungovat jen 1000px styl
        - pro správnou fci. dávat nejmenší media-screen co nejníž NEBO používat společně s min-width

    - tip - u min-width je pořadí v .css jedno :D
  
**CSS Reset**
    = jednoduchý kód pro reset všech defaultních stylů jakéhokoli prohlížeče
    - link: https://meyerweb.com/eric/tools/css/reset/

- tip - letter-spacing atribut = mezera mezi písmeny dle stanovené hodnoty (px, em, rem, ...)
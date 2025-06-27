**React koncepty - shrnutí**

    1) komponenty = stavební bloky Reactu, kombinace logiky a prezentace(renderování)
    2) props = data passovaná(volaná) do komponentu - VŽDY immutable(const)
    3) state = data specifická pro instanci komponentu - mohou se měnit

**React State**
    = react koncept, data specifická pro konkrétní instanci komponentu/stránky - mohou se měnit

    - pokud chceme nějakou komponentu/části komponenty updatovat i v rámci DOM
            - DOM = strom kompletní stránky a všech renderovaných elementů
            - aby se spol. s prom. updatoval i renderovaný obsah stránky
    
   # co může obsahovat state?

        1) data načtená z API
        2) formulářové informace
        3) proměnná rozhodující o něčem jestli to bude viditelné či ne
        
        4!!) cokoli co se na stránce bude muset měnit bez refreshe mi mělo procházet state 

**Používání state (stavů)**

tip - **React hook** 
            = spec. funkce poskytované Reactem, poskytující nám nějaký druh funkcionality 
            - určujeme si které chceme použít a které ne(můsime do komponentu importovat)
            - název hooku začíná vždy use - např. useState, useCallback, useEffect, ...
            - jsou od základu součástí reactu

   # 1) useState hook - viz. Conter.jsx
        = přidává funkcionalitu state do komponentu (fce. pro proměnnou proměnnou)
        - 1 ze způsobů jak použivat state -> nejpoužívanější hook
        - syntaxe:
            const [count, setCount] = useState(0);

                -> hodnota v () je počáteční hodnota 
                            - ta co se načte na začátku či po refreshi stránky

                -> useState vytvoří a vrací array s 2 hodnotami
                        - 1. položka -> samotná state proměnná
                        - 2. -||- -> funkce co něco s prom. provede
        
        - musíme do komponentu zavolat: import { useState } from 'react';
        - useState musí být vždy defiinováno uvnitř komponentu
        - vždy si vytvořím nějakou funkci uvnitř komponenty a následně si do této fce. zavolám tu funkci z useState arraye
            - fci. vytvořenou v komponentě si volám i na "event handlery(listenery)"
                    - onClick={} apod.

**Přepínač cvičení**
    = mini cvičení na vytvoření komponentu přepínače pomocí react useState

    - muj postup:   1) vytvoření komponentu
                    2) import useState hooku
                    3) vytvoření export default fce.
                    4) vyuvoření useState prom.
                    5) vytvoření fce + def. podmínek -> ternary op. ...again
                    6) nadef. returnu -> button s onClick={} a proměnny text
    
    - viz.: Prepinac.jsx

tip - v JS se pise true a false s mal. pismeny narozdil od pythonu
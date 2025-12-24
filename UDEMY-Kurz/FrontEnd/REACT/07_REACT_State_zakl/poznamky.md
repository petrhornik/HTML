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
                    7) menší CSS stylizace
    
    - viz.: Prepinac.jsx

tip - v JS se pise true a false s mal. pismeny narozdil od pythonu

**více state prom. v komponentu**
    = v 1 komponentu může být více state proměnných
    - můžeme nadefinovat více useState v rámcí komponentu(hl. fce) i vedlejších func.
    - viz.: PocitaciPrepinac.jsx
    
    - do onClick={} apod. vždy lze napsat jen 1 fce. -> pokud chcí na 1 klik provést více useState tak je musím uzavřít do samopstatné fce. a tu si zavolat

    - či může koexistovat více useState pro různé prvky v 1 komponentu

**useState() a renderování**
    = jak jsou komponenty renderovány a komponentový lifecycle
    - livecycle setrvává do té doby než se React rozhodne pro znovu vyrenderování (opětovné spuštění) komponenty (např. změna v state apod.)

    - komponent = funkce, která bude spouštěna Reactem
    - veškeré komponenty a jejich obsah se po spuštění provádí od shora dolů po jednotlivých řádčích
    - viz.: Counter2
        - kdykoli se změní jakýkoli state (např. zavolám setCislo) react znovu vyrenderuje komponent
  
    - při použití useState() hodnota definovaná v závorce se přiřadí proměnné vždy jen při prvotním načtení, poté už se bude vždy dosazovat nějak upravená hodnota oné proměnné, pokud nedojde k zavření a opětovnému otevření celé stránky
    - useState prom. nebude mít novou hodnotu dokud se komponenta nepřerenderuje!

**Barevne ctverce CV**
    = opakovací CV na tuto lekci viz.: React-BarvCtverce


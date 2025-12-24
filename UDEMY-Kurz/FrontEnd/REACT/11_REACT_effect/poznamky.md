TRW => the right way

**REACT effect**
    = funkce co se provede po přerenderevání komponenty/části komponentu
        -> platí i pro 1. render
        -> jedná se o tzv. side-effect co se provede při přerendecování komponenty/její části
    - použijeme useEffect() hook

    - např.: pro změny v dom, pro asynchronní operace(načtení dat z API, ...)
    - viz.: counter.jsx

    - do hooku si passneme fci. co si vytvoříme nebo passneme odjinud 
      - nebo ji nadefinujeme inline přímo do hooku

    - vždy se provede po otevření stránky - při 1. načtení komponenty
    - by default = se provede při každém re-renderu jakékoli části komponenty

    - argumenty(to v závorkách):
                  - fce. so se provede
                  - array obsahující názvy state prom při jejíchž re-renderech se má provést
                    - > přidáme [] <- přidáváme hodnoty prom.

    3 možnosti funkce

        1) provede se po každém re-renderu jakékoli části komponenty
        2) provede se u re-renderů urč. state prom. definovaných v arrayi
        3) jen při 1. načtení komponenty -> ponechat prázdný array

**REACT effect a fetching dat z API**
    = načtení dat z API při 1. otevření/renderu stránky
    -viz.: quoteFetcher.jsx
    - nelze toto udělat přes useState jelikož, useState nebere asynchronní fce. (async)

    - TRW - vytvořím prázdný state -> data fetchnu pomocí useEffect -> data zapíšu do state
    - useEffect taky neumí async fce.
        -> async fci. vložíme do normální fce. uvnitř useEffect
        -> OR async fci. si dáme samostatně a v useEffect si vytvořím basic arrow fci () => {} a do {} si zavolám tu async fci -> DONE :D

**Loading obrazovka YAY!**
    = pokud nechci aby user viděl prázdnou obrazovku/urč. místa, tak můžu vytvořit načítací text/animaci/uNameIt než přijdou do async fce. data např. z API

    - viz.: quoteLoader.jsx

    - bude se zobrazovat na základě nějakého state -> state bude true(loading bude zobrazen) a po vyrenderování se změní na false(loading zmizí)

    - tip - vytšinou se hodí dát loaderu nějakou stylizaci
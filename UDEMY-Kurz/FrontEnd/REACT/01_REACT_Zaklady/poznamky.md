**REACT**
    = front-end JS knihovna pro tvorbu UI (npm package)
    - pro stavbu UI z komponentů, které si nadefinujeme bokem
        - seskupením více malých komponentů vzikají větší aplikace
        - celý front§end skládáme z měnšách "předpřipravených" komponentů/částí
    - oficialní dokumentace: react.dev
    tip - REACTová aplikace se většinou uzavírá do nějakého <section> či <div> <- just saying ;D

   # komponent
        = kombinace HTML, CSS, JS do 1 opakovaně použitelné fce.
        - může být opakovaně použito či vnořeno do jiného komponentu (např. komponent videa do komp. video listu apod.)
        - komponenty se renderují v HTML i když jsou psány v JS
   
   # code sandbox (codesandbox.io)
        = webová služba s virtualizací a live serverem pro psaní reactu free :D
        - veškerý kód se píše do složky src a zobrazovaný obsah je ve složce public
   
   # Zaklady
    - hl. soubor index.js <- sem se importují jednotlivé komponenty/aplikace a určuje se zde jak se budou zobrazovat
    
    - soubor komponentu/apl. [NAZEV_APL].js <- zde je dofinovány komponenty a fin. aplikace co se exportuje pomocí
        export default function [NAZEV_APL]() {
            nějaká nadef. fce
        }

        - do index.js importujeme pomocí import [NAZEV_APL] from ./[NAZEV_APL].js
            - fce co importujeme vždy musí mít export default na začátku!!!!
    
    - HTML se definuje uvnitř JS

   # JSX
    = rozšíření syntaxe pro JS, devolující psaní obsahu co vypadá jako HTML přímo do JS souborů
    - nejedná se o "legální" JS!!!! <- musí být transponováno (překompilováno) do "reálného" JS
        - o transponaci se stará Babel (kompilátor "moderního" JS (JSX) na "reálný" JS)
    - JSX syntaxe = EZ (maybe...)

   # Babel
    = kompilátor co převádí JSX na klasické JS čitelné web. prohlížečem
    - díky tomuto je syntaxe mnohem jednodušší = must-have pro REACT!!

    - postup zobrazení JSX kontentu
        1) napíšeme něco v JSX
        2) Babel přeloží naše JSX do "reálného" JS
        3) "reálný" JS se zobrazí v prohlížeči
   
   # Zákl. struktura REACT aplikace
    
    1) nejvyšší komponent v souboru aplikace se většinou jmenuje App 
        - pro jednoduchost a lepší vyznání se mezi kolikrát až 1000 komponenty
        - všechny komponenty jsou ve finále nějak pospojovány a zakomponovány sem a jen toto je ve finále zavoláno a renderováno

    2) index.js
        = místo kam se importují jednotlivé aplikace a následně se volají pro renderování např. v root elementu  viz.: REACT_ZAKLADY.url
        - většinou necháme předgenerovaný
   
   # Můj vlastní react component
    = kromě hl. komponentu App si vytvoříme mimo i několik jinných menších komponentů, které pak můžeme mezi sebo kombinovat do větších celků co následně napojíme do App

    tip -> react komponent === funkce :D

    - začátek názvu komponentu bny měl začínat vel. písmenem
    - komponent vyrenderujeme tak, že si ho zavoláme do hl. komponenty App do return <[NAZEV_KOMPONENTU]/> (např.: <Pozdrav/> ) viz. REACT_ZAKLADY.url
                                                                                                - jedná se o JSX syntaxi YIPEEEEEEE!
    
    ALERT -> default může komponent vracet jen 1 tag!! (např. h1, h2, p, div <- může uvnitř obsahovat více tagů, ...)

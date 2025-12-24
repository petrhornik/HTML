**Callback**
    => po vnořování více čekajících fcí, za se tak, aby byl kód relativně 
       přehledný a funkce se prováděly s časovým odstupem od sebe, tak jak chceme

    -> při manipulací s DB se používají vždy 2+ callbacky -> 1. pro úspěšné uložení a 2. když vznikny chyba, další např. pokud je API DOWN apod.
    -> v async operacách ve fci. většinou více než 1 callback

    Callback Hell -> hromada callbacků na 1 místě (např. ve fci.) - vysoce nepřehledné a ošklivé

tip => používání callbacků se NEDÁ vyhnout...

    - např. pokud se nevratí data v danném časovém intervalu tak se vykoná něco v opačném případě něco jinného atd. (viz. 04_Promises/app.js)
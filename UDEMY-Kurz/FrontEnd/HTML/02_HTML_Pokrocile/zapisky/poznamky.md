**Co je HTML5?**

    = standard definující HTML(jedná se o sadu instrukcí která definuje jak by se mělo s HTML pracovat a jak by HTML mělo fungovat)
    + zahrnuje nové elementy, atributy, funkce... obsažené v této "verzi" DOKUMENTACE HTML
    - podobné jako pravidla pro technické nákresy
    - webové prohlížeče zobrazují obsah HTML souborů na bázi tohoto standardu
    - dokumentace: https://html.spec.whatwg.org/
    - <!DOCTYPE html>   <- říká že .html soubor používá HTML5

**INLINE a BLOCK elementy**

    INLINE(inline-block) =  element zabere jen potřebnou část řádku dle jeho velikosti
    BLOCK = element zabere vždy celý řádek

**<div>**
    = obecný element typu BLOCK mezi jehož taby můžeme seskupit několik elementů a následně je upravovat nezávisle na zbytku kódu(např.: p{} <- upravuje všechny paragrafy, class_divu p{} <- upravuje jen paragrafy uvnitř divu s příslušným class názvem)
    - podobné jako uzavírání kódu do funkcí
    - u CSS používáno vždy
    - např.: na wikipedii

**<span>**
    = obecný element typu INLINE - jinak dělá to samé jako div
    - hodí se např.: pro stylizování urč. částí textu

**<hr> (horizontal rule)**
    = vytvoří tzv. dělící čáru(čáru přej 1 celý řádek)
    - dobré např.: pro oddělení dlouchýćh textů, nadpisů, a  td.
    - nemá uzavírací tag

**<br> (line break)**
    = pro oddělování řádků v textu
    - např.: u básniček

**<sup> (superscript)**
    = posune obsažený text trochu nahoru a zmenší ho
    - např.: u mat. vzorců, citace, odkazy(anchor tagy),....

**<sub> (subscript)**
    = posune text trochu dolů a zmenší ho
    - např.: pro chemické vzorce, psaní zlomků,....

**HTML Entity**
    = speciální sekvence, které dokupy zobrazí nějaký 1 charakter
    - charakter = něco specifického nebo něco co se nedá jednoduše napsat na klávesnici
    - vždy začíná & a končí ;   (např.: &#1036;, &lt;) <- zápis číselný či "znakový"
    - seznam: https://tools.w3cub.com/html-entities
    - je lepší používat entity než znaky na klávesnici, jelikož HTML si může myslet že se jedná např. o nějaký element

**Semantic markup**
    = značení dle se významu elementu/obsahu - vime co kam patří a proč
    - místo hromady divů použijeme elementy s "příslušnými názvy" co fungují stejně jako div
    - <main> = označuje hlavní obsah stránky
    - <header> = označuje hlavičku, většinou obsahuje nadpis, obecný popisek, <nav>, ...
    - <nav> = označuje navigační panel jakéhokoli druhu
    - <footer> = označuje zápatí(to co je na konci stránky), obsahuje, autora, copyright,...
    - <section> = nějaká sekce něčeho, vpodstatě jinak pojmenovaný div
    - <article> = nějaký samostatný článek(např.: hodiny, počasí, ...)
    - <aside> = něco co není důležité k hlavnímu textu, většinou někde na straně
    - <time> = pro zobrazení času
    - <figure> = něco co má vyšší význam(důležitý obrázek, ilustrace,...)
    - toto pomáhá i web prohlížečům pro rychlejší načítání či jinným vývojářům pro lepší přehlednost
    - LEPŠÍ PŘEHLEDNOST KÓDU

**Emmet**
    = pomůcka pro psaní HTML <- super rychle
    - VSCode má build-in
    - dokumentace: https://docs.emmet.io/cheat-sheet/
    - > = přídá element dovnitř
    - + = přídá element vedle
    - () = vytvoří skupinu z elementů uvnitř
    - * = násobení elementů
    - {} = přidání textu do elementu
    - ... viz. dokumentace


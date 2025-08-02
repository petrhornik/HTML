**Grid systém**
    = systém pozicování contentu websity od Bootstrapu
    - content co pozicujeme musí být uzavřen v container class komponentu
    -viz.:GridSYSTEM>index.html

   postup stylizace

    řádek -> row
        = veškerý content uzavřený v komponentu s class row se pozicuje v rámci 1 řádku (pokud se na 1 řádek nevejde, tak se wrapuje)
        - každý řádek je dlouhý 12 "jednotek" - při přesáhnutí se content wrapuje
            - pokud nevyužiju všech 12 "jednotek" tak na konci zbyde volné místo

    sloupec -> col
        - položkám uzavř. v komponentu určujeme velikost pomocí class col
            - každá položka představuje "sloupec" o výšce 1 řádku
        - pro automatické rozložení stačí jen samotná class col
            - případně specifikujeme konkrét. vel. jen 1 položce a ostatní se přizpůsobí automaticky rovným dílem
        
    např.: pokud chci mít 2 textové komponenty a každá zabíral 1/2 containeru tak každý musí mít class col-6 :D

    - tip: pro snažší pozicování se vyplácí si nastavit výrazné bg


**rensponzivní Grid systém**
    = mezi col a "jednotku" vložím utilitu velikosti (sm, md, lg, xl)
        - breakpointy pro definování grid rozložení na různých vel. obrazovek
        syntax: col-{breakpoint}-{jednotka} -> např.: col-sm-4
                                                        col-xl-5

    - do classu u uzavř. komponent LZE definovat více col, ALE vždy pro urč. breakpoint!

**responziv. grid - obrázky**
    = img-fluid => když sloupeček s obrázkem změní velikost, velikost obrázku se mění společně se sloupcem

    - tip => obrázky mají vždy obraj (pro vyrovnání mezer i gueess), tzv. gutter - dá se vypnout když do divu s class row přidám g-0


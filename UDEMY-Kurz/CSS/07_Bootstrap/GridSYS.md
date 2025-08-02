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


**Grid sys. utilities**
    = pomůcku good to know for Bootstram grid
 
  1) flexbox pozicování    
    
    - class row nám už dá defaultně DISPLAY FLEX !!
        => komponenty se nám řadí ve flex row by default
    - u včech položek uvnitř row lze používat flexbox stylizaci
    - v tomto případě hl. osa === X a vedl. osa === Y

    na vedlejší ose

        1) align-items-{hodnota}
            - definujeme u row
            - zarovnání všech položek na vedlejší ose (viz.: CSS>05)
                hodnoty: 
                    - start - od vrchu
                    - end - od spodu
                    - baseline - od vrchu bez rostažení IDK
                    - center - středová čára

        2) align-self-{hodnota}
            - definuje se u nějakého z col
            - to samé, ALE pro jednotlivé col

    na hl. ose

        1) justify-content-{hodnota}
            - definujeme u row
            - zarovnání všech položek na hlavní ose (viz.: CSS>05)
            - hodnoty: stejné jako u align
                -tip - between, around, evenly === space-between/around/evenly

    tip - na align i justify se lze nastavit breakpointy pro růz. obrazovky
            



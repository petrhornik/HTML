**Tvoření funkcí**
    = vytvoříme ji tzv. definováním(předepsáním), toto se samo o sebě nespustí, spouští se až při tzv. zavolání na tom řádku kde je zavolána

    - syntax-volání: function nazev_fce(hodnoty pro zpracování navíc);
    - syntax-definování: 
         function nazev_fce(předděfinování promněnných užitých v kódu){kód ve fci.};

**Argumenty**
    = inputy akceptované funkcí definované v ()
    - za input se při volání dosadíme název proměnné, arraye, objektu, ...
        -> odkazovaná odnota se nastaví jako hodnota inputu
        -> když při zavolání jakýkoli input zustane nevyplněn, tak automaticky undefined

    - např.: "hello".indexOf("o"); -> "o" je zpracováno jako input

    - přiklad viz.: 02_TvoreniFci

**Více argumentů**
    = argumenty v () oddělujeme ,
    - když je specifikujeme při volání tak hodnoty zadáváme stejným způsobem

**Return**
    = výstup z funkce(výsledná hodnota, array, obj. co nám fce. po zkončení vrátí)
    - pokocí keywordu return označíme např.: proměnnou jejíž hodnota se z fce. vrátí jako výstup, logiku mezi prom. který vrací true/false ...
    - hodnota z returnu se dá uložit do proměnné pro další manipulaci

    - také se po provedení return ukončí celá fce. i když po return následuje další kód
        -> dobré např.: pro rozhodovací funkce apod.
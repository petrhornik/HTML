**CSS**
    = "prog." jaz. určený primárně pro úpravu vzhledu webů - říká webu jak má co vypadat a kde na stránce to má být
    - na obsah v html se odkazujeme pomocí selektoru a následně za něj do {} píšeme vlastnost: hodnota; (např.: color: purple;)

**Přiřazení CSS**

    1) přimo v HTML kódu - NOT GUT ve většině případech
        
        - píšeme do opening tagu do atributu style=""
        - stylování vždy platí ten pro onen element

    2) do tagu <style>

        - píšeme samostatné CSS to tagu <style> přimo v html souboru
        - not bad but not optimal
        - CSS je platné jen pro onu HTML stránku

    3) samostatný .css soubor

        - VERY GUT +10 soc. creddit!!!!!!
        - soubor propojíme s .html souborem
        - propojíme pomocí elementu <link> v head
        - pojmenováváme COKOLI.css ( já pojmenuju style.css )
            - <link rel="stylesheet" href="CESTA_K_SOUBORU">

**CSS vlastnosti - barveni**

    1) color
        = nastavení barvy pro text v elementu
        - schopen přijmout zadání barvy v mnoha formátech

    2) background-color
        = nastavení barvy pozadí uvnitř onoho elementu
        - tip - stačí napsat bg-c a dát TAB :)

    3) background
        = všeobecný element pro veškeré funkce background, které se zde dají nastavít zárověň (např. bacground-image, ..., a i backgroud-color)

**Barvy v CSS**

    druhy zápisu (systémů zápisu)

        1) názvy barev
            =   některé barvy mají svůj vlastní název (brue, yellow, teal, magenta, ...)
            - syntaxe - color: blue;

        2) RGB zápis
            = zápis pomocí 3 barevnách kanálů
                - R - červená,  G - zelená, B - modrá
                - pomocí mixování těchto barev lze vytvořit JAKOUKOLI barvu
                - každý kanál má hodnoty 0-255 
            - syntaxe: color: rgb(125,56,255);
            - formát využivají např. color pickery
                    -vytvořím si barvu zkopíruju RGB -> vložím do CSS -> HOTOVO :D

        3) HEX zápis (16 soustava)
            = stejné jako RGB zápis, ALE hodnoty 0-255 se píší hexadecimálně
            - hodnota 00 - FF (0-255) [ff -> 15*16+15=256(0-255)]
            - syntaxe:color: #ffff00; <- každý kanál zastupují 2 znaky (# je tam jen pro určení druhu zápisu)
            - kompaktnější zápis <- VERY GUT!!!!!
            - HEX zápis se dá zkrátit pouze na 1 znak pokud máme ve dvojci 2 stejné znaky (CC=C, BB=B 55=5 apod.)
            tip - VSc má integrovaný color picker

tip - každá vlastnost musí mít po zápisu hodnoty VŽDY ; <- pokud ho nenapíšu tak vlastnost nebude fungovat, ale nedostanu error!!!!!!!!!!!

            


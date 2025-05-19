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
    -VSC poradí :D

**Vlastnosti textu v CSS**

    = vše pro vzhledovou customizaci jakéhokoli druhu textu (velikosti, font, ...)

    1) text-align
        = určuje zarovnání(pozicování) textu v onom elementu na který nastavujeme
        
        - atributy: center - doprostřed elementu
                    left - levá strana -||- (default)
                    right - pravá strana -||-

    2) font-weight
        = pro nastavení tloušťky textu (light/bold)
        - hodnoty určujeme názvy či čísly(100 - 900 (po stovkách))

        - atributy: normal (400) - normální tloušťka
                    bold (700) - tlusté písmo
                    lighter
                    bolder

        - tip - pokud číselná hodnota pro urč. font neexistuje tak se nastaví ta nejbližší existující
    
    3) text-decoration
        = nastavení "dekorativních" elementů na text. poli (např. podtržení)

        - atributy: 
                pozice čáry:
                    underline - podtržení textu
                    overline - nadtržení textu
                    line-trough - čára skrze text
                barva:
                    {nazev/kód barvy} - dekorace bude mít onu barvu
                styl čáry:
                    dotted - tečkovaná
                    solid - plná
                    dashed - čárkovaná
                    wavy - vlnkovaná
                tloušťka čáry:
                    {hodnota tloušťky (např. v px)}
        
        - tip - pomocí tohoto lze mazat dekorace hypertext. odkazů
                    - atribut: none

    4) line-height
        = nastavení velikosti pro každý řádek elementu (např. pro odstupy mezi řádky atd.)
        
        - atributy: {specifikovaná hodnota(název/číslo(+jednotky))}

    5) letter-spacing
        = pro nast. velikosti mezer mezi jednotlivými znaky v textu

        - atributy: {specifikovaná hodnota(název/číslo(+jednotky))}
    
    6) font-size
        = nastavení vel. text uvnitř urč. elementu

        - atributy: {specifikovaná hodnota(název/číslo(+jednotky))}

    7) font-family
        = změna fontu pro text v urč. elementu
        - nějaké fonty jsou "build-in", ale většína "populárních" se musí importovat

        - atributy: {nazev fontu} např.: Georgia, sherif, ...

        - fonty se většinou nastavují ve větší skupině "tzv. font stacku"
                - důvod: další fonty slouží jako backup pokud by PC neobsahoval ten 1. definovaný font či aby se automaticky nevyužil nežádoucí font viz.: style_text.css

    8) text-transform
        = změna formátu textu v elementu

        - atributy: uppercase
                    lowercase
                    capitalize
                    none
                    ...

**Jednotky v CSS**
    = jednotky pro výjádření hodnot (např. velikosti) - např. u font-size

    1) absolutní hodnoty

        1.1)pixely (px)

            = určování hodnoty v pixelech (něco jako cm ALE pro weby)
            - nejvíce používané
            - 1px v css != 1px irl && 1px === small as f***
            - nedoporučuje se pro responsive

            - zápis: {číselná hodnota}px
        
                    
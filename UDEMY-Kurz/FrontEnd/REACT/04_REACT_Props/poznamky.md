**React props(vlastnosti)**
    = argumenty pro volané komponenty -> pokud si komponent zavolám do jiného či do App
    - využívá se pro konfigurovatelné komponenty
    - syntaxe např.: <Greeter/ nazev_prop="promenna">
    - dobré např. pro komponenty s proměnným kontentem apod.
    - podobné jako atributy u HTML
    
    - jednot. props se napojují na komponent(fci.) jako argument -> ta hodnota co se definuje u volání fce. do závorky :D (je jedno jak pojmenujeme argument u funkce)
    - všechny props se sjednocují do 1 objektu
    
    - informace si volám do fce. komponentu pomocí ( nazev_arg.nazev_prop_hodnoty )
        - např. pokud si určím že argument(nazev objektu s props) bude props tak si jednotlivé hodnoty poté volám pomocí props.name, props.age, atd. do {} u HTML elementu kde to chci vypsat např.: <h1> Ahoj {props.name} ! </h1>
            - u klas. JS píšu jen název propu např.: const pocet = pocetStran;

    - viz.: ./React-props/src/Greeter.jsx

  - # !!! normální praxe je destrukturalizace objektu na jednot. props(položky v objektu) - viz.: ./React-props/src/Greeter.jsx

tip - do elementu kde voláme komponent můžeme passnou tolik prop kolik chceme

**Props jiného typu než string**
    = hodnoty co nechci passovat(propouštět) jako string píšu do {} <- pro všechny ostatní dat. typy
    - např.: pocetStran={20}, pocetStran={undefined}, apod.

**Nastavení default hodnot props**
    = nastavení zálk. hodnoty pro passnutý prop pokud mu nebyla definována hodnota
    - nastavím pomocí: export default function NAZEV_FCE({ NAZEV_PROP=DEFAULT_VAL }) {}
        - např.: export default function Die({ pocetStran=6 }){}
            - pokud u propu nebude nic specificky def. tak hodnota pocetStran bude vždy 6
        - viz. Greeter.jsx a Die.jsx

**Passing objektů a arrayů(pole/list nějakého množ. hodnot)**
    = je možné passovat když si je do propu zavoláme odjinut či je specifukujeme přímo do propu, ale vždy dovnitř {} -> nazev_prop={[polozka1, polozka2, atd.]}
    
    - u objektu syntaxe: nazev_prop={{a: 1, b: 2, c: 3}} <- 1. {} = odkázání že obsah uvnitř je JS 2. {} = značí objekt
        - abc= názvy prvků kterými se hodnoty z objektu volají
    
    - viz.: ListPicker.jsx

**React podminky(conditionals)**
    = podmínková logika v komponentu
    - if, else, else if či využít ternary operator -> podminka ? pokud_pravda : pokud_nepravda;
    - nejvíc ez -> narvat ternary. op. přímo do elementu kde renderuji obsah dle podminky

    tip - můžeme renderovat i elementy uzavřené v JS syntaxi která už v žádném elementu jení a je jen hozená v return

    tip#2 - pro rozhodování podmínek můžeme použít i && (and) -> vyrenderuje vždy jen podm. True

    - v reactu se primárně využívá ternary op. !!!!!!!

**React developer tools extension**
    = extention do prohjlížeče - pomucka k vývoji reactu
    - pomůcky pro vývoj front-endu v reactu
    - přistupujeme skrze dev tools v prohlížeči -> +

    1) components = list právě vyrenderovaných komponent na stránce, kterou vidím
    2)profiler = IDK

**Dynamická stylizace komponentu**
    = proměnný styl na bázi nějakých akcí (např. výhry/prohry u DoubleDice "hry")
    - stylizace inline přímo u položek(elementů) v komponentu
    
    - syntaxe: style={color: "BARVA"}; <- nebo si vytvořím objekt a zavolám ho (každá CSS vlastnost v objektu se uplatní!!!)
    
    - u CSS vlastností co obsahují 2 slova oddělená - se použije cammelCasing
        font-size:; -> fontSize: "" apod.
    
    - pro dynamičnost do vlastnosti přidáme ternary op. pro rozhodování -> viz.: DoubleDice.jsx
    
    - pouze tyto styly děláme inline jinak dávat do CSS stylesheetu

    - do stylizace se dají taky passovat propy komponentu(fce.) style={{VLASTNOST: NAZEV_PROP}} 
    - viz.: Heading.jsx

**Renderování arrayů pomocí mapy**
    = pokud dostáváme nějaký komponent jako array (list hodnot) a chceme aby se něco stalo s KAŽDOU hodnotou obsaženou v onom arrayi -> cykly
        - pokud do komponentu importujeme array a chceme aby se s každou položkou něco stalo a nevracelo to array jako takový (array bez úpravy = BLE)
    
    - každou položku individuálně "namapujeme" do renderovatelného elementu

tip - pokud si vytvořím array obsahující HTML elementy v komponentu a následně si ho zavolám do v ničem neuzavř. {} tak se veškeré elementy v arrayi vyrenderují
    - viz.: ColorList.jsx
    
    -viz.: ColourList.jsx

    - často se píše přímo inline k tomu kde chci "namapovaný" array renderovat
    - MAPY JSOU POTŘEBA VŠUDE...
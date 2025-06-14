**Průhlednost / ALPHA kanál**
    = nastavujeme průhlednost elementu např. u backround-color
    
    1) rgba(red, green, blue, alpha) <- alpha kanál
        
        - kanál alpha určuje průhlednost
        - upraví se jen u konkrétní vlastnosti elementu u které zároveň definujeme barvu
        - neovlivňuje child elementy
        -funguje i u hexu (přidáme za kód barvy 2 znaky v rozmezí 00-FF)
            - u hodnoty FF se to do kódu znaky nepíší
        - tip- vyplácí se používat color picker :D
    
    2) opacity

        - uplatní se na celý odkazovaný element + jeho child elementy
        - rozsah 0 - 1 (0.25; apod.)

**Vlastnost position**
    = určuje jak se budou elementy v dokumentu pozicovat

    1) static (default)
        = element je pozicován dle "toku" dokumentu (dle pozice elementu v doc.)
        - top, bottom, left, right jsou ignorovány
    
    2) relative
        = element je pozicován dle "toku" dokumentu (dle pozice elementu v doc.)
        - pomocí top, bottom, left, right lze posouvat na bázi původní pozice
        - element může překrýt jinný (ostatní elementy uznávají jen původní pozici)

    3) absolute
        = element je z "toku" dokumentu odstraněn (pro ostatní elementu jakoby neexistuje - nezabírá v dokumentu žádné místo)
        - pomocí top, bottom, left, right lze pozicovat na nejbližšího napozicovaného nadřazeného elementu (nesting yay :D) - většinou reletive parrentu 
        
        parrent{ position: relative; -> child{ position: absolute;} <- child se nyní pozicuje jen v rámci rodiče
            
            - pokud žádný nadřaz. element není pozicován, tak se pozicuje na bázi dokumentu
            - pokud nebudu dále pozicovat pomocí t, b, l, r, tak zachová původní pozici, jen bude ignorován vším ostatním
    
    4) fixed
        = element je z "toku" dokumentu odstraněn, je pevně fixován na danou pozici a hýbe se společne se scrollováním v rámci viewportu(okna co je vidět)
        - top, bottom, left, right funguje podobně jako absolute
            - neexistuje nastování v pozic. rodičích!

    5) sticky
        = element je pozicován dle "toku" dokumentu (dle pozice elementu v doc.), v případě že by se přes něj přescrollovalo přilepí se k hornímu okraji a zůstane viditelný (dobré např. pro navbar)
        - začne jako nefixovaný

**Přechody (Transitions)**
    = umožňují animování přechodů z jedné vlastnosti elementu na jinou (např. u :hover apod.)

    syntaxe: transition: 1s; <- přechod u všech změněných hodnot bude trvat 1s
        - stačí přidat hl. selektoru a na veškeré podselektory se aplikuje také

    1) specifikace konkrétní vlastnosti
        = pokud chci animovat jen konkrétní změnu specifikuje se do trans. před čas
            - transition: backgroud-color 1s; <- animace se projeví pouze u vlast. bg-c
    2) delay
        = pokut chci animaci zpozdit po triggernutí
            - transition: 1s 1s; <- píšu vždy za čas trvání (zpoždění 1s)

    - tip - lze kombinovat nekolik spec. přechodů do jednoho transition
        - transition: backgroud-color 1s 1s, border-radius 2s;
    
    3) timing-funciton
        = nastavení druhu přechodu (nerovnoměrný přechod)
        syntaxe:  transition-timing-function: hodnota;
            - tip - dá se zakomponovat do transition: ; :D - píšeme vždy jako poslední hodnotu

        3.1) ease-in
            = začne pomalu a postupně zrychluje
        
        3.2) ease-out
            = začne rychle a postupně zpomaluje
        
        3.3) cubic-bezier()
            = rychlost animace v různých čas. úsecích viz. prechody.css
            - stránka easings.net <- demostsrace animací

**Transformace**
    = úpravy elementů (otáčení, roztahovýní, škálování, zkosení, atd.) + několik najednou
    - vše se default provází ze/na bázi středu elementu
        - lze měmit pomocí transform-origin: hodnota; <- viz. transform.css

tip - pokud nastavím margin left a right na auto, tak se element vycentruje v rámci rodiče či dokumentu

    - vlastnosti:
    
        1) rotate()
            = otočí element na bázi stupňů(deg), radiánů(rad), otoček(turns) okolo fixovaného bodu
            - tip - lze otáčet i dle os x, y, z či existuje rotate3d()

        2) scale()
            = škáluje element na bázi původních rozměrů
            syntaxe: scale(0.5) <- všechny rozměry se naškálují na 0.5

            - lze škálovat i jednotlivé osy -> scale(0.5, 2) <- x=0.5;y=2;
                - psát se dá i samostatně scaleY() a scaleX()

        3) translate()
            = pohybuje s elementem dle osy X a Y či ve 3D na bázi původní pozice
            syntaxe: translate(10px, 20px) <- x=10px;y=20px;

            - dá se samostatně rozepsat jako u scale()
        
        4) skew()
            = zkosení elementu dle os X a Y na bázi stupňů(deg), radiánů(rad)
            syntaxe: skew(X, Y)

            - dá se samostatně rozepsat jako u scale()

    - tip - vlastnosti lze kombinovat -> oddělujeme mezerou
    - tip - transform se aplikuje i na všechny child uvnitř onoho elementu

**Background(pozadí)**
    = nastavuje vzhled pozadí elementu/celého dokumentu
    - nastavení co bude na pozadí a jak to bude vypadat atd.
    - všechny vlastnosti se dají "sesalátovat" do jedné backgroud: hodnoty;

    - vlastnosti:

        1) background-color:;
            = nastavuje 1 konkrétní barvu jako pozadí (formát: rgb, rgba, hex, ...)

        2) background-image: ;
            = nastavuje na pozadí obrázek + je možné nastavit linear-gradient
            - obrázky můžu mít lokální či stačí url obrázku

        3) background-size: ;
            = nastavuje jakým stylem se bude pozadí zobrazovat (hl. u obrázků)

            - hodnoty:

                3.1) cover <- zmenší obr. tak aby se vešel co nejlépe do elementu + ho celý zakrýval -> přečnívající části ořízne

                3.1) contain <- zvětší obrázek tak aby pokrýval co největší pochu, ale aby nepřečníval, zbylé volné místo zaplní opakovaným vložením obr.
        
        4) backround-repeat: ;
            = nastavení opakování 1 obrázku
            - moc se nepouziva
        
        5) backround-position: ;
            = od jaké části obrázku se má pozadí zobrazovat
            - např. bottom -> obr. pozadí se použije od spodu a bude se načítat od spodu

        6) background: ;
            = obecná vlastnost backround -> dá se zde zkombinovat vše co se týče pozadí bez ohledu na pořadí
            - backround-size musí být uvedeno hned za bg-position odděleno / viz. background-css

**Google fonts :D**
    = portál na stahování fontů zdarma
    - bude fungovat na všech zařízeních
    - fonty si vyberu na fonts.google.com a přidám si je do stránky pomocí embbeded code do headeru v .html (viz. G_fonts.html)

tip - calc() <- schopné matematických výpočtů
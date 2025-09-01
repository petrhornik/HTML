**for...in**
    = loop co se běžně nepoužívá, ale lze s ním loopovat napříč položkami v objektu
        -> s jinnými loopy nelze

**cykly(iritating) a objekty**
    = default nelze loopovat pomocí for, for...of napříč objektem jelikoz není irratable
        -> lze použít for...in loop -> ten nám vrací key-val, nikoli hodnoty
        
        -> lze upravit volání tak, že si zavolám celý objekt a do [] vložím value z for...in loopu jelikož ta reprezentuje key-val
            -> viz.: 07_loopOverObject

**Jinné způsoby**
    = lze k hodnotám přistupovat i jinak než for...in

    1) Object.keys(nazev_objektu);
       = vytvoří array obsahující veškeré key-val specifikovaného objektu
    
    2) Object.values(nazev_objektu);
        = to samé, ale pro veškeré hodnoty

    - následně se vytvořený array dá zkombinovat např.: s for...of pro přistupování
    - jelikož se v obou případěch jedná o arraye lze používat i veškeré jejich fce.
        -> .indexOf(); .length; ... 
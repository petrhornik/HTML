**selecting**
  = použití JS k vybrání 1 či více HTML elementů a následně s nimi nějak manipulovat
  -> máme různé metody

  1) getElementById
    = passujeme této metodě *string*, který musí být shodný s ID některého elementu v .html, jinak vystup bude undefined
    -> pokud je element s ID nalezen tak ho to verátí do JS pro manipulaci
    -> jedná se o metodu pro document objekt

    -> syntax: const naz_prom = document.getElementById("id");

  2) getElementsByTagName
    = pro vybrání všech elementů urč. tagu
    -> vrací tzv. HTMLcollection

  *HTMLcollection*
    = vypadá jako array, ALE není
    - lze použít array syntax pro přístup k jednotlivým elementům v kolekci
      -> syntax jako u arr.: document.getElementsByTagName("img")[cislo]
        -> přímo zde, nebo u proměnné kde je uloženo

    - kolekce jsou iterable i kdež nejsou arraye!!
      -> lze s nimi zacházet jako s arrayi

  *Element*
    = objekt který ve výsledku JS při volání obdrží, obsahuje ony veškeré hodnoty

  3) getElementsByClassName
    = pro vybrání všech elementů obsahujících stejný class
     -> také vrací HTMLcollection

  - pokud class či tag neexistuje ani 1 tak se bude vrace prázdný HTMLcollection

  4) querySelector
    = novejší AiO metoda pro výběr 1 elementu
    -> můžeme odkazovat na element pomocí: tagu, class, id, ...
    -> při výběru id musím začínat # a u class .

    -> specifikovat který element chci (když jich pod volaným id/class/tagem je víc), tak muzu použít CSS metody
      -> např.: nth-of-type(cislo), nebo pomocí [prop] pro nějaký tag

  5) querySelectorAll
    = to samé, Ale vrací zase HTMLcollection všech elementů se stejným tagem/class/id

  - u qerry se dá přistupovat samostatně i k vnořeným tagům pomocí syntaxe z CSS

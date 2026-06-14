**String**
    = textový řetězec
    - musí být uzavřen v "" nebo '' <- vždy pouze 1 druh!! nelze mixovat
    - text může obsahovat vše, i mezery!
    - přiřazujeme vždy k nějaké většinou let proměnn
    - např.: let string = "hello"

    - lze vytvořit i prázdný string pomocí "" či ''
    - btw -> lze použít "" uvnitř stringu pokud je uzavřen v '' a naopak 

   1) indexace stringu
    = stringy jsou indexovány(číslovány) od prvního charakteru od 0!

    - např.: hello <- intex h -> 0, index o -> 4
    - pro "vytažení"/manipulaci charakteru urč. indexu se použijí [] <- isn't this bracket notation?...IDK
    
    - např: let text = "toto je text", text[3] -> o

   2) spec. fce. pro stringy(METODY)
    = funkce psané za názvem volaného stringu za . -> NAZEV_STR.FCE (např. text.length), u většiny fcí se píší ()
       > připojení takové fce pomocí . se jmenuje dot notation btw. -> používá se často
    
    -  property lze navázat i za nově napsaný string
       > např.: "ahoj".length -> připadně let text = "ahoj".length <- při zavolání prom. se vypíše 4 !!!

POZOR => 1 + 1 => 2, ALE "1" + 1 => "11" či "text" + "text" => "texttext" <- dochází k provedení concat (spojení stringu/ů do jednoho!)
      -> ALEE "1" - 1 => 0 ...JS can be confusing :D (btw let's NOT use this...)

   3) concat 
      - 1 z propů pro stringy
      = spojení více stringů do 1
      - pomocí prop. .concat či jen pomocí +    -> STRING_PROM.concat(STRING_PROM); "STRING" + "STRING"; STRING_PROM + STRING_PROM
        > output bude vždy stejný...
      - výstup lze zapsat do jiné prom. btw

   4) metody pro string
      = akce(fce) které můžeme provádět s konkrétnímy(individuálnámi) stringy
      - lze použít např. pro hledání, upravy, změny jednot. char či celku konkrétního stringu
      - syntax: STRING_PROM.METODA() <- u některých se () nepíší
   
      - ukázky některých:

         4.1) .toUpperCase() <- převede celý string na velká písmena bez ohledu na to jaká je jejich původní velikost
         4.2) .toLowerCase() <- opak .toUpperCase()
         4.3) .trim() <- umaže jakékoli volné místo(mezery) na okrajích stringu

      - lze spojit i více metod zasebe -> tvz. chainování STRING_PROM.METODA().METODA().METODA() ...
        > např.: text.trim().toUpperCase

   5) argumenty uvnitř metod
      = do () u metod lze doplnit další argumenty pro upřesnění funkčnosti apod.
      - např.: u .search() -> do závorek musím specifikovat co to má hledat např. "a"

      5.1) .intexOf()
         -> vyhledává index hledaného znaku či index 1. znaku hledaného řetězce
         - např.: text.indexOf('j') -> 5, text.indexOf("e tex") -> 6
         - pokud se vrátí output -1 => hledaný znak/řetězec v stringu není

      5.2) .slice()
         -> output budou jenom ty znaky dle specifikovaného start a end indexu
         - např.: text.slice(1,6) -> oto j
         - syntax: STRING_PROM(START_INDEX,END_INDEX)
         - stačí passnout/poskytnout jen START_INDEX a výstup bude od tohoto indexu až do konce stringu

      5.3) .replace()
         -> můžeme zaměnit část stringu za jinný text
         - např.: text.replace("text", "slepice") -> toto je slepice
         - syntax: STRING_PROM("CO_CHCI_ZMENIT", "CO_TAM_CHCI");
         - ještě existuje .replaceAll() -> dohledat v MDN :D

      5.4) .repeat()
         -> opakuje string několikrát za sebou
         - např.: let pozdrav = "AHOJ".repeat(3) > "AHOJAHOJAHOJ"
         - syntax: STRING/STRING_PROM.repeact(KOLIKRÁT)

   6) template literáty (backticky)
      = pokud chci do stringu vypisovat(volat) jiné prom případně v něm spouštět JS tak string uzavřu do `` <- backticků
         -> vznik tzv. string template -> do template se přidají zavolané hodnoty/provede se JS kód a následně je to celé vypsáno jako klas. string v ""
      - volané proměnné či cokoli JS related pišu do ${} 
      - např.: let name = 'Petr'; console.log(`Jmenuji se ${name}`) -> Jmenuji se Petr.

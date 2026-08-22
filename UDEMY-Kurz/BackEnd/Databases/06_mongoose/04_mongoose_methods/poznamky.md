**Mongoose instance methods**

    => přidávání vlastních custom metod pro schémata použitelnou na jednotlivých instancích

    - na konkrétních schématu si můžu vytvořit vlastní metody, které potom lze využít na všech instancích/položkách vytvořených přes model využívající toto schéma

    - když vytvořím položku/INSTANCI tak automaticky má tyto metody na sobe dostupné skrze dot.notation

    - metody platí i pro položky tažené z DB pokud splňují, že patří pod konkrétní model
      
      -> když schema s metodami využívá model co accesuje v mongo kolekci "products", tak všechny položky z této kolekce budou automaticky brány pod tento model (asi O_o), proto metody budou avail. i zde

    - využití: lze vytvořit metody s funkcemi na manipulaci s konkrétní položkou onoho modelu/ updatování atd.
   
   1) tvorba

        => vytvořím pomocí naz_schematu.methods.naz_me_metody = neco (fce/data/...)
        - za metodou NEdávat () !!
          -> při volání metody už dávat... 
        
        !!! -> v případě funkce používat jen function keyword -> NIKDY arrow fce.
          -> kvůli accesování do položky pomocí this

        - např. (viz. index.js):
                                productSchema.methods.greet = function () {
                                    console.log("HELLO WORLD!")
                                }

        - využití např.: při autentizaci

      - kód se stává víc readable edíky tomuto a neopakusí se stejné snippety vícekrát :DD

**Mongoose static methods**

  => metody co se využívají na samotném modelu místo jednotlivých instancí

    -> používá se na manipulaci s celkovým modelem/všemi instancemi/položkami zároveň

    -> co se podminek tyče, platí to samé jako u instance methods, statics se používá na modelu (na všech instancích z danné kolekce z DB)

  1) tvorba
  
    => podobné jako u instance methods, tvoří se na schéma
      -> naz_schemantu.statics.naz_metody = ...

  2) použití

      => keyword this ve fci. v definici metody označuje celý model
        -> odkazuje na celou kolekci položek v DB kam je model napojen (v tomto případě kolekce products)

      - vlastní metody na prohledávání, updatování, mazání, atd. více položek najednou či celého modelu/kolekce v DB


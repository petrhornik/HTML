**Mongoose schémata více**  //YAY

    => více práce a možností mongoose schémat pro modely CRUD operací

   1) validace schémat

        -> na každou položku ve schématu se dá specifikovat více než jen datový typ
            -> za název položky přidám objekt ve kterém mohu detailně specifikovat vlastnosti
                - viz.: index.js

        - dá se nastavit například validace na několik druhů
          -> např. jestli je required (např. při tvoření nove položky -> insert CRUD operace) 


        - pokud do CRUD requestu daného modelu přidám hodnotu co schéma modelu neobsahuje
          -> tak se pošle JEN to co koresponduje se schématem, zbytek NE 

   2) SchemaType options

        => jedná se vlastně o hodnoty v objektu co umístím za název položky ve schématu místo jen datového typu

        - do tohoto objektu následně mohu definovat více hodnot najednou co musí položka splňovat

        např.: 
                const = new mongoose.Schema({
                    
                    name: String,       // jen určen dat. typ položky
                    
                    price: {            // schematype options -> více vlastností najednou
                        type: Number,
                        required: true,
                        default: 250,
                    },
                
                })

        - možnosti schematype options -> https://mongoosejs.com/docs/schematypes#schematype-options

        - existují i vlastnosti co lze použit jen u konkrétních dat. typů -> String, Number, Boolean, ...

        !!!! -> pokud chci mít z nějaké položky array, tak ho určím že datový typ položek arraye uzavřu do arraye (či []) weird right...?
            - viz.: index.js -> categories ve schématu

            - pokud bych to definovat do schematype tak to dám k vlastnosti/option: type

            - pokud do arraye dám hodnotu jinného typu než je specifikováno, hodnota bude automaticky konverována na správný typ
              -> pkud konverze selže, vrátí to error a nic se neodešle... 

        - do položky, lze dát i další objekt s více pod-položkami u kterých opět mohou být definovány stejné vlastnosti -> celková ""nadřazená položka" potom už nemusím mít vlastní specifikaci
   
   3) Validace a updating

        => při updatování mongoose nekontroluje validaci (to platí i pro .findOneAndUpdate())
            -> musím specifikovat v options_qry vlastnost runValidators: true
            -> potom už vše OK :D

   4) validační chyby/errory

        => ke každé vlastnosti se dá přidat custom error message pokud je nesplněna

        - k vlastnosti/option dám array -> nejdříve specifikuju hodnotu a zaní error message
          - např.: min: 0, -> min: [0, "Cena musí být vyšší než 0!!"],

!!! -> vlastnost enum -> kontroluje jestli odesílaná hodnota se rovná alespoň 1 hodnotě ze specifikovaného arraye (vytvořím bokem)
    - prevence injectingu neplatných dat do DB

    - viz.  index.js -> schema -> size
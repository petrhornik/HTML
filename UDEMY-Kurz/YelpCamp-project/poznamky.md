**YelpCamp vetší projekt**

    => "velký" projekt se vším co jsem se naučil

    - ozkaz na referenci z kurzu: https://github.com/Colt/YelpCamp/tree/c12b6ca9576b48b579bc304f701ebb71d6f9879a

    - u projektu budu spíš většinu poznamek prát do kódu a sem jenou zajimavosti (i guess) 
       -> core poznámky budou samostatně a toto je projek kombinací všeho :D a tipy

    - centrální soubor se zde jmenuje app.js NIKOLI index

   - pokud budu do nějaké routy requestu dávat proměnnou, tak musí být až na konci, pokud za ní dám request na routu bez proměnné, tak bude hledat prom. i tam (idk why...)

   # Grouping v HTML formech

      = inputy ve formu mohou sdílet v name="" skupinu společně se svým názvem

      - položky se potom budou v requestu na BE "sdružovat" pod specifikovaný název skupiny

      - např.: name="campground[title]

      - viz. output z req.body: {"campground":{"title":"a","location":"a"}}

      #tip -> v requestu jsou data odesílna právě pod key-valy name=""

   # Passování req.body v POST requestu v ExpressJS

      -> app.use(express.urlencoded({extended: true}));

      - bez tohoto řádku se body nebude parsovat (idk why)
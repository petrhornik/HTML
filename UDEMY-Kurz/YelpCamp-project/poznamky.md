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

   # EJS-mate

      = zastává funkcionalitu teplatingu z eleventy v ejs
         - lze vytvořit tzv. boilerplate co se bude wrapovat okolo contentu (nav, footer, ..)

      - jedná se o basic npm package
      - veškeré boilerplate soubory pak ukládám do složky layouts ve views¨

      - <%- body %> -> referencuje obsah vkládaných stránek
      - <% layout("layouts/naz_layoutu") %> -> v content stránkách určuje do jakého layoutu se vloží

#tip - komponenty se vyplácí dávat samostatně
   - tzv. partials -> já bych nazval spíš components (but for sake of this course...)

      - partials už potom jen includuju přímo do layoutu dle názvu souboru v /partials
        - <%- include("../parials/naz_souboru") %>

   # Bootstrap implementation

      = v tomto miniprojektu používám na styling bootstrap

      - incuduju přes jsdelivr CDN linky
      - potom následný styling pomocí bootstrap5 komponent :D


   # Inserting obrázků

      - zatím pouze Stringové odkazy v databázi
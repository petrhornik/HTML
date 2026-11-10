**Reconstructing routů**

    = předěnání aby se používal router
        - přidám ./routes a do doho routy tak aby to bylo přehlednější
        
        - k funkcionalitě použiju ExpressJS router

        - toto provedu jak pro campgrounds tak pro reviews

    - když si některá id routy dám jako prefix a nejsou přímo v routě, tak se mi může stát že se mi neimportují do routy v souboru a tak budou chybět v req.params objektu;
      - pro fixup nastavím v routeru parametr {mergeParams: true} a je hotovo

**Serving statických prvků**

    - statický prvek == nějaký neměnící se soubor používaný opakovaně

    - umisťuju in general do TZV. public složky v projektu
      - prvky co mám "veřejně dostupné na stránce" - posílají se společně s daty na FE a jsou zde vidět i v dev-tools
        - obrázky (primárně), custom stylizace, scripty, ...

    - vytvořím /public a do něj tyto soubory umístím

    #tip - většina frameworků už tento název uznává a funkcionalitu implementuje automaticky (NextJS, Astro, ...)

    - vše z public složky se importuje jen tak jak je umístěno právě v oné složce bez ./public
      - ./public/img.png -- X
      - /img.png -- ✓

    - složku jejíž content chci servovat jako static assety nastavím v konfiguraci expressu
      - app.use(express.static("naz_slozky"));

    - vyplatí se opět ošetřit pomocí path.join kdybych to pustil z jinné složky

**Přidání express-session**

    - pro správu uživatelských sessions na BE (nikdy nepoužívat memory-store v produkci!!)
    
    -  opět klasicky s cookies viz app.js

    #tip - Date.now(); mi vrací čas v danouch chvíli v ms

    - na cookie lze nastavit parametry httpOnly -> prevence odcizení cookie při XSS (Cross Side Scripting)

**Přidání flash messages skrze connect-flash**

    - pro zobrazování flash messages s nějakou zprávou uvnitř EJS souborů (views)

    - po importu specifikuju na req objekt u jednotlivých rout kde to potřebuju a renderovat to přes middleware :D
        - pak jen určit místo v EJS souborech kde to chci renderovat

    - viz.: routes/campground.js; views/layouts/boilerplate.ejs; app.js

    - stylizace pomocí bootstrap5 alertů a /partials
      - udělám si z flashmessage opakovaelně použitelný partial :D

    - mám pro success a error

    - erro flash zde mám např pro zobrazení při pokusu o render neexistující stránky apod.
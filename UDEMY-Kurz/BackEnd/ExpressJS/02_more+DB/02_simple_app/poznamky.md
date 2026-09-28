**Primitivní aplikace pomocí express+ejs+mongoose**

    => tvorba jednoduché aplikace pomocí mongoose a express js na tracking zboží na skladě

        -> tvorba kompletní CRUD aplikace s tím co už umím

    -> soubory pro express routy a mongoose modely budu mít rozděleny mimo


   1) tvorba mongoose modelů

        -> modely tvořím samostatně vně index.js aby to bylo přehlednější
        -> hotový model ze souboru vyexportuju jako JS module pomocí -> module.exports = naz_modelu;

        -> do index.js už potom jednoduše naimportuju pomocí commonJS require (nebo ES6 new way ;D )


   2) před-tvorba DB

        => použijeme kompletně samostatný tzv. seed (seed.js) soubor, který není součástí web. aplikace
            -> použití čistě pro nastavení a uložení prvních dat do DB kolekce

        -> pokud vkládám více dokumentů do kolekce najednou pomocí .insertMany(), tak pozor na chyby
            - 1 věc neprojde validací = nec se do kolekce neinsertne

   3) renderování položek z DB

        => udělám si normální get route v expressu, ale typu ASYNC
            -> musím awaitovat data z DB než to všechny potřebné pullne, až potom můžu pokračovat

        - všechny routy kde se provádí mongoose operacy by měly (musí) být async (jinak not GUT :::)

        - nasledně můžu stuff z db uložit do proměnné a následně poslat na render do ejs templatu, atd.

   4) přidávání položek do DB skrze expressjs a mongoose

        => jednoduše si vytvořím get request co mě dostane na stránku s formulářem
            -> ten při submitnutí pošle post request a ten se zpracuje a pomocí mongoose modelu pošle do DB

        - v post routě si data z formu vytahnu pmocí req.body
          -> zde si to potom rozřadím do mongoose dotazu na Product.inserOne() s await

   5) updatování položek v DB přes expressjs
        
        => funguje stejně jako tvorba nových, jen si v getu formu musím zavolat data té konkrétní položky co chci upravit

        -> připomínka: pro updatovací CRUD request jako je PUT, PATCH -> použít knihovnu method-override
            - viz: index.js

#tip -> pro předvyplnění původní hodnoty položky v editoru u select html elementu
        -použiju v ejs ternary operator pro oveření který option je uložený v DB a dle toho prátím v konkrétním případě keyword selected
        - viz.: edit.ejs

        - pro dynamičnost si můžu případně kategorie definovat externě např . express.js a potom si to importovat do EJS souborů a tam přes array iterovat a vytvořit tak jednotlivé options dynamicky

   6) mazání pomocí express

        => jednodušše zase si udělám post request na mazání a form či jen tlačítko ke každému produktu a k manipulaci v CRUD requestu použiju mongoose dotazy

        -> musím vytvořit form na delete request pomocí method-override a query stringu stejně jako u update

   7) NAVIC -> filtrování (dle kategorie např.)
   
    => vyfiltrovat konkrétní položky splňující určitou věc (např. stejnou kategorii)

    - 2 přístupy
      -> /categories/druh_kat
      -> /products?category=druh_kat <- použiju toto v kurzu viz. index.js
# Validace formulářů (komunikace s DB)

      1) Clien-side validace (bootsrap)

         = když používám styling/js z bootstrap5 tak už on sám obsahuje custom validaci formulářů

         - viz.: https://getbootstrap.com/docs/5.3/forms/validation/
         - určím prohlížení aby vypnul default validaci a předám jí boootstrapu

         - musím využít JS pro funkci validace (stačí zkopírovat z bootsrap webu)

         - pokud budu chtít zobrazit popisek u položek co podínku splňují tak uzavřu text do divu u onoho inputu a dám mu class
           -> valid-feedback

      2) Basic error handler/class
   
         = definoval jsem si dole v app.js základní error handler, a následně class pro snažší tvorbu costuom errorů co bude handler zobrzovat (AppError again)

         - místo AppError -> zde ExpressError v /utils

         - potom si vytvořím i tu .catch callback. wrapper fci :P
           ->  catchAsync.js

# tip - vždy mám jen 1 hlavní/main error handler na konci před app.listen a všechny ty classy, trow new Error/AppError na tento handler jen triggerují protože vrací tzv. error objekt na který handler reaguje

    3)  Použití označení všech neplatných cest
   
        = použiju app.all a na route nastavím veškeré cesty
            - pomocí "/{*path}"
              - dám až před app.listen, aby se normálně prováděly routy specifikované nad či se byly schopny vracet error objekty


    4) aplikováníerror objektu v situacích

        = dám ify s podmínka mi do requestů na místa kde se to hodí se specifickými status kódy a zprávami jak je třeba

    5) tvorba error template
   
    = vytvořím stránku na kterou se bude error handler odkazovat a kde se bude error vypisovat
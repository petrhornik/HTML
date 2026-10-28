**Flash message v ExpressJS**

    = pro zobrazování upozornění atd. něco jako jsem dělal v nette či něco jako JS alert

    - externí package connect-flash // jedna z mnoha knihoven

    - vyhodí mi nějakou hlášku která zůstane chvíli a potom zmizí
      - warning, success, error, ...

    - inicializuju opět přidánim skrze app.use(flash());
  
    - flash v routech potom dávám na req
      - např.: req.flash("success", "Úspěště uloženo")

    - tvorba
      - nejdřív si to musím někde specifikovat většinou na post routě
      - potom co mě to odkaže pomocí res redirect na nějaký get route tak můžu dříve specifikovanou flashmessage passnout do ejs stránky co se zde vykreslí a flash message se nějde tam zobrazí

    - pokud chci renderovat flash message na všech stránkách a nechci to specifikovat na všechny vzvlášť, tak můžu použít middleware
      - přidí se na res objekt do locals, takže každý ejs template bude mít přístup k této proměnné s daty

#tip -> pokud chci něco passovat do všech ejs templatů v res.render zároveň tak můřu použít middleware app.use a v něm přidat nějaká ty data do 
                  - res.locals.naz_promene = data;
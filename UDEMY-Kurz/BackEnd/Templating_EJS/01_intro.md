**Dynamic HTML with Templating**

    => templating umožňuje definovat předepsaný pattern for web stránku, který můžeme dynamicky modifikovat
        -> předem určen základní vzhled(layout) stránky (jen se dosazuje content)

    -> např. pattern jak má vypadat vyhledávací stránka (nevíme kolik výsledků bude, co budou, apod.) <- stránka se vytváří za chodu
        -> určíme: vzhled vyobrazených výsledků

    -> části templatů se mohou opakovat

    -> budeme používat EJS (taky existuje: nunjucks, pugjs, jade, ...)

    -> napíšu si základní strukturu následně do částí HTML dosazuji dynamicky content

    např.:
            <body>
                <h1>{heading}</h1>  <- za heading lze dosadit dynamický content
            </body>

    -> lze kombinovat i s podmínkami a další JS syntaxí

**EJS**

    => embedded javascript (templating) -> dostupný přímo v ExressJS

    -> narve JS přímo do HTML templatů

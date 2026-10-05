# Validace dat pomocí JOI schématu

    JOI = JS validační tool (není součástí ExpressJS)

        - npm install joi
        - docs: https://joi.dev/api/18.x.x 

        - definuju schéma v tzv. Joi.object ve kterém specifikuju veškeré hodnoty

        - dá se specifikovat na 1 položku více parametrů zároveň
          - např.: datový typ, required, max, min, ...

        - po dokončení schématu se musí zavolat naz_schematu.validate()
          - to si uložím do proměnné a můžu s tím pak pracovat dál

        !! - validovaný request musí přesně splňovat schéma jinak se vždy vrátí error (i když nějaká data přebývají tak nepustí)

        - pro checkování errou můžu např. kontrolovat pomocí ifu za validací jestli validační objekt obsahuje error nebo ne
          - viz.: app.js

# JOI middleware

    - udělám si v souboru samostatnou reusable fci na využití JOI schema validace

    - následně si to budu volat před před tu fci co řeší samotný req a res do samotné requert routy
      - viz.: app.post request handler v app.js

    - následně můžu použít tento validační midleware na více routách zároveň
      - zde momentálně v CREATE (app.post) a v UPDATOVACÍ (app.put)

    - na schémata si udělám samostatný soubor pro přehlednost kde všechna schémata shraňuju

    
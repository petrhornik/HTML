**ExpressJS + MongoDB relationships**

    = ukázka využití relationships v "aplikaci"
        - viz.: BE/Databases/07/02

    - farmy jsou s produkty spojeny M:N vazbou

    - použiju one to bilions relation v product modelu
      - + taky referencuju pomocí one to many z farm modelu (why? IDK :D)

#   implementace možnosti vytvoření farmy

    - oddělím si v index.js prostor pro farm routy a product routy
    - vytvořím new farm form jako u produktu¨

!! - tip - v res.redirect začínám routu / ALE v res.render začínám bez / !!

    - potom jen vytvořím index page pro vylistování farem
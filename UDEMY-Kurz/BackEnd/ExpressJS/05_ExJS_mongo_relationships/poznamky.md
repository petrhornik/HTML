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

# vytvoření routy pro displaying detailu farmy

    - funguje stejně jako detail u produktu

# vytvoření produktu pro konkrétní farmu

    - použiju nested routing pro vyrenderování formu z /products/new a přidám k tomu před toto id farmy

    - v contentu odesílaném ve fromy nic neměním jen pravím routu tak abych měl v params ID konkrétní farmy

    - odkazuju vzájemně jak z produktu na farmu, tak z farmy na produkty

# úprava pro správnou funkčnost

    - jen úpravy celkového mini-projektu pro implementaci vazby mezi produkty a farmami napříč stránkami

# mazání farem (farent + child dokumnetů)

    - pomocí farm -> _id smažu samotnou farmu a všechny přidružené produkty

    - 
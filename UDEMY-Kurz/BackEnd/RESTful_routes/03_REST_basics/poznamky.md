**REST**

=> návod (standard) jak by měla probíhat komunikace mezi FE a BE
    - jak by měla být strukturována API (cesty v API -> GET, POST, ...)

- ukazuje jak by se mělo zacházet s prostředky, se kterými lze provádět tzv. CRUD operace
  - např. texty, obrázky, prostředky v DB, ...

    CRUD = Create, Read, Update, Delete

- většinou standard pro veřejně přístupné API

- nemusím dodržet, ale potom mi každý dá přes hubu


**Uniform internface** - důležitá část RESTu

    => mít 1 stálou URL adresu a používat jí pro více http operací
        - lze exposenout kompletní CRUD skrze tyto http operace
        - na stejné url mohu mít GET, POST, PUT, DELETE, ... dohromady



tip: https://gist.github.com/ -> instantní sdílení souborů/poznámek/... -> má otevřené API pro CRUD operace (test v Postmanu )

    - https://docs.github.com/en/rest/gists/gists?apiVersion=2026-03-10


**Route names** (from RubyOnRails)

    index route -> GET /comments = list all comments
        -> primárně metoda get
    create route -> POST / comments = create new comment
        -> kombinace get a post či pouze post
    show route -> GET /comments/:id = get one comment (using ID)
        -> metoda get
    update route -> PATCH /comments/:id = update one comment
        -> metoda patch(updatuje jen určité části) nebo put(updatuje vždy celý blok dat payloadem z requestu) (+ kombinace s get)
        -> updatuju na bázi payload z mnou posílaného update requestu
    delete/destroy route -> DELETE /comments/:id = delete one comment
        -> metoda delete


    #tip -> kombinace s GET znamená serve request na zobrazení formuláře pro manipuraci s POST/PATCH atd.


- základní implementace REST CRUDu (+ route names) viz. index.js

- ve většině případů stačí pouze GET a POST implementace, ale pro dodržení RESTful konvence se používají právě i PATCH apod. (zastávají zde vlastně tzv. sémantickou fci.)

**Express method override**

    - problem: HTML formy umí posílat jen GET a POST requesty
    - solution: 
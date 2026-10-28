tip - instancí prohlížeče zde myslím celý prohlížeč jako takový

**Sessions**

    = taky přidává statefullness do HTTP, pro dočasné uložení nějakých dat napříč requesty uložené SERVER-SIDE

    - umí uchovat více dat než v cookie
    - nachází se na BE/serveru
    - více secured než cookies

    - princip
      - data mám na BE a do prohlížeče pošlu jen malou cookie s nějakým ID či tokenem pro odemčení právě té session zpět na serveru
        - např.: session nákupního košíku pro neregistrované uživatele před checkoutem -> po checkoutu se to propíše do DB

    - v prohlížeči bude uložený v cookie jen nějaký accessToken nebo sessionID či něco co odkáže tu instanci prohlížeče na nějaký session ze kterého se vytahají data

    - na tomto principu funguje např.: redis

    - je to vlastně objekt na BE uložený v req.session a je pro každý prohlížeč "unikátní" (každá instance má svůj vlastní token connect.sid a na něj napojený samostatný res.session objekt)

**implementace do Expressu**

    = potřebuju package express-session

    - pokud chci používat musím použít i secret signature jelikož se zde všechny cookies odkazující na sessiony podepisují

    app.use(session({
        secret: "nejaky_text",
    }))

    - při accessu z prohlížeče se mi hned do něj ulože connect.id cookie s tokenem který mě odkáže na konkrétní session na BE

    - potom se z této instance prohlížeče bude při requestu posílat to samé connect.sid pořád dokola, takže budu accesovat ten stejný session s daty

    !! - defaultní memoryStore z express-session se nesmí používat v productionu, je jen pro debugging a dev enviroment jelikož trpí na memoryleak a je limitovaný na single process
      - měl bych místo topo použít nějaký kompatifilní session store

    - od poslední verze musí při inicializaci do app.use kremě session specifikovat i 3 hodnoty
      - secret -> secret string pro tvorbu signed token cookie
      - resave -> vynucuje znovuuložení session při jejim accesování i když se v ním žádná hodnota nezmění (typycky chci false)
      - saveUninitialized ->  vynutí uložení neinicializovaných sessionů (nových co ještě nebyly upraveny)

    - když restartuju server tak se celý session storage vymaže
      - platí pokud používám základní memoryStore
        -> když použiju jinný store tak to může fungovat jinak 
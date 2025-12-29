npm init -y => přeskočí veškeré otázky a ihned vygeneruje package.json

**ExpressJS basics**

    -> pro inicializaci si v index.js do const prom. dám require("express");
    
    -> vytvořím const prom. app co spustí express 
        -> const app = express();

    -> porty pro naslouchání nastavím pomocí app.listen(cislo_portu, callback);
        -> už se nezastaví a bude naslouchat (URL => localhost:cislo_portu)

    -> app.use(callback) -> fce. v callbacku se provede při každém requestu na jakýkoli port (pokud nejsou specifikovány argumenty)


    -tip: server se musí restartovat při každé změně kódu (aby se změny projevily)

**Request a Response objekty**

    => objekty pro manipulaci s requesty a odpověďmi

    -> oba se automaticky passují do app.use() callbacku
        -> app.use(req, res) <- pozor na pořadí

    
    -> request přijde jako basic text -> express ho rozparsuje automaticky do objektu a passne do app.use()
        -> objekt obsahuje vše včetně requestované URL (nejdůležitější i guess...)
        => vytvoří objekt z přijatého http requestu

    -> response objekt na odpovědi -> atribut .send na odeslání http odpovědi
        -> lze poslat => status, string, Json, HTML, Buffer, ...
        => vytvoří objekt ze kterého uznikne http response

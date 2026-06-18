npm init -y => přeskočí veškeré otázky a ihned vygeneruje package.json

**ExpressJS basics**

    -> pro inicializaci si v index.js do const prom. dám require("express");
    
    -> vytvořím const prom. app co spustí express 
        -> const app = express();

    -> porty pro naslouchání nastavím pomocí app.listen(cislo_portu, callback);
        -> po spuštění se už nezastaví a bude naslouchat (URL => localhost:cislo_portu)

    -> app.use(callback) -> fce. v callbacku se provede při každém requestu na jakýkoli port (pokud nejsou specifikovány argumenty)


    -tip: server se musí restartovat při každé změně kódu (aby se změny projevily)

**Request a Response objekty**

    => objekty pro manipulaci s requesty a odpověďmi

    -> oba se automaticky passují do app.use() callbacku
        -> app.use(req, res) <- pozor na pořadí

    
    -> request přijde jako text (HTTP request) -> express ho rozparsuje automaticky do objektu a passne do app.use()
        -> objekt obsahuje vše včetně requestované URL (nejdůležitější i guess...)
        => vytvoří objekt z přijatého http requestu

    -> response objekt na odpovědi -> vytvořen expressJS obsahuje response, při odeslání se převede na HTTP text 
        -> atribut .send na odeslání http odpovědi
        -> lze poslat => status, string, Json, HTML, Buffer, ...
        => vytvoří objekt ze kterého vznikne http response

**Routung**

    => vzít příchozí request a cestu co requestuje a spojit to s nějakým kódem a nějakou responce

    -> např.: /help spustí něco a /welocme něco jinného apod.

    app.get("cesta", callback) -> spustí callback jen pokud se shoduje cesta v requestu (pouze GET requesty)

        ->  app.get("/dogs", () => {
                ...
            })

            - spustí se jen pokud se budu odkazovat na ip:port/dogs (domena/dogs)

    - pokud chci aby se něco vracelo i ze všech ostatních routes co nepoužívám tam na konec (před app.listen) app.get(/(.*)/, callback)
          -> úplně všechny routy
          -> ty co využívám mám definované před tímto - jejich res.send() se provede dřív než toto
            -> toto se provede pro vše ostatní (např. vracení chybové hlášky, že se nevyužívá místo "cannot ...")
          
          -> funguje na vše (get, post, ...)
          -> /(.*)/  označení všech routes

  
  *tip* - HTTP request vždy vrací jen 1 response 
            -> vždy se musí odkazovat na 1 finální res.send
            -> pokud se odkáže na více, provede se jen 1. a zytek ne

    app.post() => stejná syntax jako u .get -> zpracovává post requesty

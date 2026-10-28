**HTTP Cookies**

    =  ten bordel co si stránky ukládájí lokálně v prohlížeči, umožňuje stateful HTTP

    - malej kus informací co se uloží v prohlížeči uživatele
    - key_val a data -> např.: user_token: 12345674861454
  
    - uložená cookie se VŽDY následně bude posílat společne s requestem na server oné konkrétní stránky

    - lze do nich ukládat vše od preferencí, tokenů, tracking, ...
        - cookies lze používat v dobrém i velmi špatném slova smyslu

**Cookies v expressJS**

   1) Poslání (sending)
        
        => odeslání a uložení cookie do browseru uživatele

        - pomocí res.cookie("key-val", "data"); vytvořím cookie s daty

        - toto vytvoří jen cookie pro odeslnání musím ještě vytvořit res.send("nejaky_text")
          - aby se samotný response z BE odeslal

        -viz.: https://www.geeksforgeeks.org/web-tech/express-js-res-cookie-function/

        - lze uložit více attributů kromě key-val a dat více na googlu :D

   2) vytažení cookie z requestu

        - odkazuju se na req.cookies 
          - pro tuto funkcionalitu potřebuju externí package -> cookie-parser
            - toto není by default součástní ExpressJS

        - req.cookies mi rozparsuje všechny cookies do 1 objektu s key-val: hodnota
            - údaje tahám ven pomocí destrukturalizace stejně jako req.params

   3) Podepisování (signing) cookies

        => cookie-parser obsahuje podporu podepsaných cookies
        - cookie-parser dokáže cookie podepsat spec. kódem
          - cookie se pomocí tohot spec. stringu/kódu "podepíše" a pošle se na klienta
            - pokud dojde u klienta k úpravě, tak při requestu na server se content signed cookie už nebude seďět společně s původním "podepsaným" vzhledem a tak vím, že někdo s obsahem manipúuloval

       - pro ověření, že s obsahem cookie během přenosu nikdo nemanipuloval (overeni integrity)

       - po setup vytvořím nějaký ten seacred string a dám ho do () u inicializace cookieParseru -> app.use(cookieParser("security_string"))

      - následně při tvorbě -> res.cookie("key-val", hodnota, {signed: true});

       - pro získání signed cookies musím použít -> req.signedCookies 
        - vrátí objekt jen s signed cookies a req.cookies objekt jes s nepodepsanými
       - máme 2 skupiny pro získání abychom mohli rozlišit v kódu co je co

       - když nebude platný signature u signed cookie, tak se mi buď bude vracet jako false nebo vůbec
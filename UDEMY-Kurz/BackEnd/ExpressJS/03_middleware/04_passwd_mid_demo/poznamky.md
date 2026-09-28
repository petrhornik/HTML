**Passwd middleware demo**

    = middleware specifikovaný pro konkrétní route, který bude acceptovat query string s heslem

    -> dle shody vrátí buď odpověd na request klasicky nebo vrátí svůj vlastní res.send se zamítnutím

**Užití app.use() jen u konkrétních route**

    = nastavení provádění middleware jen na konkrétních request routes
        -> well můžu passnout middleware jako callback přímo k routě

    - lze passnout do routy ještě před samotné "body" s algoritmem zpracování requestu
      - např.: app.get("/route", middleware, (req,res) => {});
        -> těch middleware tam můžu dát i víc za sebe!
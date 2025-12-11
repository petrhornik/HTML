-> HTTP request může obsahovat proměnné (např.: .../api/people/:id/ <- lze si zavolat např. .../people/1/ nebo .../people/2/ atd.)
        -> :id {{id}} <id> <- notace v dokumentaci pro zaměnění za variable

**Query Strings**

    => přidám za samotná request další hodnoty
    -> za request přidám ? a potom hodnoty oddělené &
        
        -> .../people/2?age=23&color=blue <- hodnoty za ? jsou API ignorovány a nemají na request vliv

    -> najdu např. u search -> server poté hledá specifickou hodnotu
    -> https://api.tvmaze.com/schedule?country=US&date=2014-12-01 <- určené konkrétní hodnoty pro vyhledávání na BE


tip: https://www.tvmaze.com/api
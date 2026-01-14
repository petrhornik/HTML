**express path parameters**

   *path variable*

        => pro vytvoření proměnné v cestě (např: reddit)
        -> path může obsahovat několi path var. zasebou
        -> vznikne pattern -> např.: /pics/:imgID -> za imgID se dá dosadit cokoli a routa se využije pokud je dodržen pattern
        
        -> proměnná se označuje : 
            -> např.: app.get("/path/:subpath", callback)

        -> lze poté dynamicky měnit obsah stránky

        req.params -> uložená informace o konkrétní hodnotě konkrétní path var.
            -> styl objektu (náz. path var. je key-val)

**query strings** 

    => text v routě za ?
        
        -> např.: domain/chats?q="text" (q je jedna z nejpoužívanějších "syntaxí" pro vyhledávání, ale lze si nastavit cokoli)

    -> další věc co může upravovat jak se nám vrací data
    -> opět obsaženo v request objektu jako req.query
    -> v path se nic nespecifikuje

    -> za ? UŽ píšu jen naz_str=str
        -> lze víc zasebou odděleno &

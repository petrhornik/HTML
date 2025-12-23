**Object Prototype**

    => mechanismus jakým JS objekty dědí vlastnosti mezi sebou
    
    -> prototype objekt -> objekt sloužící jako template(předloha) pro objekt ve kterém je obsažen (objekt arraye, string, document objekt,  ...)
        -> obsahuje exitující(nebo vytvořené vlastní) metody (.push, .pop, . fill, .filter, ...)
                -> např.: array metody, tring metody, ...
        
        -> lze si vytvořit vlastní custom prototype a následně ho používat napříč vytvořenými objekty apod.


    -> v objektech uloženo jako _proto_ nebo __proto atd.

    -> lze se odkázat přímo pomocí nazev.prototype

    -> keyword this -> u metody odkazuje zpět na obsah objektu (stringu. arraye, ...)

    .prototype -> je actual template objekt mak je dají přidávat vlastní metody (pro celou skupinzu objektů)
    .__proto__ -> reference na něj co se nachází u konkrétních vytvořených objektů (u konkrétní proměnné/objektu)
**Tabulky**
    = datové tabuky (sloupce a řádky)
    - pro srovnání položek např. při porovnávání
    - samostatný element
    - tip: dříve se používaly pro pozicování celé stránky
    - pro řádkování tabulky použijeme <tr> - i když nic nedáme do <tr> tak i přes to prohlížeč všechny buňky přiřadí do 1 spol. <tr>
    - tabulka se automaticky nezarovnává

**Tabulkové elementy**

    a) hlavné elementy
        1) <table> - hlavní element def. tabulku do kterého se všechno zadává
    
        2) <th> - header(nadpisová) buňka - pro každý tabulkový sloupec tvoříme samostatný <th>
    
        3) <td> - definuje buňku v tabulce obsahující nějaká data
    
        4) <tr> - tabulková řádek (dělí buňky v tabulce na jednotlivé řádky - každá buňka by měla být obsažena v nějakém tr)

    b) elementy pro štábní kulturu(abychom věděli co je co)
     
        - elementy nemají žádnou "viditelnou" funkci a slouží jen pro přehlednost kódu

        1) <thead> - header tabulky - sem bychom měli psát nadpisy, podnadpisy
                    - pokud vytvoříme thead tak se zbytek automaticky "zabalí" do <tbody>

        2) <tbody> - obsahuje všechny buňky s nějakým obsahem

        3) <tfoot> - obsahuje např. celkové informace (např. celkový součet položek, ceny, ...)

**Tabulky - rowspan a colspan**

    = pokud chceme aby položka zabírala více řádků či sloupců v tabulce

    1) rowspan = roztáhne buňku na více řádků (zabere více místa v sloupci)

    2) colspan = roztáhne buňku na více sloupců (zabere více místa v řádku)

**HTML formuláře**

    <form> - element 
    
    - prázdný shell/kontejner který se nijak nezobrazí
    - obsahuje ovládání pro textové vstupy, heslové vstupy, zaškrtávací pole, tlačítka, atd.
    - např.: přihlašovací stránka, vyplňovačka, vyhledávací pole, ...
    
    - <form> reprezentuje dokument ve kterém jsou obsaženy zadané informace 
    
    - action = atribut pro <form> specifikuje KAM jsou informace obsažené v onom <form> odesílány (např.: nějaké url)

    - tip: Emmet automaticky action doplňuje

    - po potvrzení odeslání formuláře (kliknutí na tlačítko, Enter, ...) se vyšle HTTP požadavek je odeslán společně s daty obsaženými v onom <form> a pomocí action určíme kam požadavek půjde

    - method = atribut pro <form>, určuje jaká HTTP metoda by měla být použita TBC...
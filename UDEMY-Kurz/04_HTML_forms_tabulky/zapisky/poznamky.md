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
    
    - action="" = atribut pro <form> specifikuje KAM jsou informace obsažené v onom <form> odesílány (např.: nějaké url)

    - tip: Emmet automaticky action doplňuje

    - po potvrzení odeslání formuláře (kliknutí na tlačítko, Enter, ...) se vyšle HTTP požadavek je odeslán společně s daty obsaženými v onom <form> a pomocí action určíme kam požadavek půjde

    - method="" = atribut pro <form>, určuje jaká HTTP metoda by měla být použita TBC...

**Formulářové elementy**

    1) <input> = pro vytvoření nějakého vstupu pro data
                - obsahuje až 20 různých typů zadávání věcí do formuláře
                - nemá uzavírací tag
                - atributy
                    a) type="" - určuje typ/druh inputu (mění vše od chování po vzhled)
                                - druhy najdu na MDN
                    
                    b) placeholder="" - text v prázdném zadávacím poli zobrazený dokud něco nenapíšu
                                        - funguje jen pro textová/číslicová pole

                    c) id="" - identifikace inputu pro propojení s <label>

                    d) name="" - jméno odkazující na obsah onoho inputu, když jsou data odesílána na server
                                - odesílá se název položky(např. jmeno) s nějakou hodnotou(např. Petr) - jmeno=Petr
                                - server si bere z formuláře hodnoty dle jim přiřazených názvů (např. pokud hledám přes google tak servery googlu po odeslání formu hledají hodnotu se jménem q)

    2) <label> = používá se pro popisky/názvy inputů (hlavně "zaškrtávacích")
                - při asociaci labelu a inputu se dá "zaktivovat" input i při kliknutí na label
                - atributy
                    a) for="" - zadáme sem id urč. inputu pro propojení labelu s onom inputem

    tip - input id by mělo být asociováno jen s jedním labelem, tím co je pro ten input určen

    3) <button> = tlacitko 
                - default pokud se nachází ve form. tak odesílá formulář na stránku z atributu action v <form> + mě tam přesmeruje, protože je v základu nastaveno na type="submit" i když type nemám definovaný
                
                - atributy
                    a) type="" - určuje co za druh tlacitka to je
                                    - např. když nastavím type="button" tak se i uvnitř form. nic dít nebude
                    b) value="" - pokud máme <button> bez closing tagu tak tímto atributem měníme název

    tip - formular lze odeslat i bez tlacitka - staci v textovém poli dat Enter
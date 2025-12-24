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

                    e) value="" - použijeme v případě zaškrtávacích polí - určuje co za hodnotu se odešle pokud je pole zaškrtnuto (default se odesílá "on")

                    - druhy(určujeme pomocí type="")

                        a) checkbox
                                = zaškrtávací pole
                                - atribut checked - pole už bude samo zaškrtnuté
                                - odesílá hodnotu on (pole je zaškrtnuté)

                        b) radio button
                            = výběrové pole(výběr 1 položky z dostupných možností)
                            - vždy jich je více než 1
                            - asociace do skupin pomocí stejných názvů name=""
                            - musíme nastavit atribut value="" aby se odeslala jiná hodnota než on
                            - pro povinný výběr dám atribut required všem polím 1 skupiny (všem se stejným mame="")
                        
                        c) range
                            = slider (např. hlasitost)
                            - vrací číselnou hodnotu v danném rozsahu
                            - atriguty
                                min="" - nejmenší možná čiselná hodnota
                                max="" - největší -||-
                                step="" - o kolik hodnot se číslo zvětší při 1 posunu
                                value="" - startovní hodnota (hodnota po načtené stránky)

                        d) number
                            = číselné pole
                            - mužeme nastavit min a max stejně jako u range
                        
                        e) color
                            = výběr barvy
                        
                        f) text
                            = pole pro zadání textu


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

    4) <select> = výběrové otevírací pole (dropdown menu)
                - <option> = položka k výběru obsažená v select (podobné jako ul li) 
                        - atrigut selected = položka bude vabraná vždy jako default
    
    5) <textarea> = pole pro zadání textu na více řádků (např.: komentář na YT video či jiné socky)
                    - má closing tag!
                    - atrigut rows="" - nastaví počet *viditelných* řádků, poté se musí scrollovat
                    - atribut cols="" - počet možných znaků v 1 řádku + 2 (např.: cols ="10" jsou 12 znaků na řádkek apod.)

**HTML5 Form validation (ověření)**

        = ověření jestli zadáná data do formuláře jsou platná (splňují předem definované podmínky - např. u mail. adres, hesel, ...)
        - aby se předešlo odesílání neplatných dat
        - jedná se o atributy pro input
        
         a) required - pole musí být vyplněno, jinak nelze form odeslat (submit)

         b) minlengh="" - minimální počet znaků

         c) maxlength="" - max. počet znaků 
                         - nikdy nepude napsat více znaků než je dáno v tomto atributu
        
         d) min="" max="" - to samé, ale pro čísla

         e) pattern="" - definujeme co všechno by měl zadaný text obsahovat

         f) type="" - urč. typy inputu obsahují i prvek validace (např. email, url, ...)
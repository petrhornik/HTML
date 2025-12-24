**Dalsi metody**

    1) .concat
        = spojení (merge) více arrayů do sebe
        - zavoláme si 1 array, pomocí . notation přidáme concat a do () specifikujeme další array
        
        - spojení arrayů se ukládá jako nový array (lze uložit do samostatné prom.) 
        
        - syntax: naz_arr_1.concat(naz_arr_2)
        
        - viz.: 03_dalsi_metody

        - array před concat VŽDY bude 1.        well yea....

    2) .includes
        = jestli array obsahuje konkrétní hodnotu, vrací boolean
        - do () specifikujeme hodnotu, kterou detekujeme
        - musíme dávat pozor i na casing

        - syntax: naz_arr.includes(hodnota);

    3) .indexOf
        = vrací index hledané hodoty, pokud nenajde vrací -1
        - do () specifikujeme hodnotu, kterou detekujeme
        - pozor na casing

        - syntax: naz_arr.indexOf(hodnota);

    4) .reverse
        = obrací array (poslední bude na začátku apod.), destruktivní
            -> mutuje(mění) původní array

        - syntax: naz_arr.reverse();

    5) .slice
        = vymezení arraye od urč indexu po urč index
            -> tyto hodnoty se specifikují do ()
            -> nejdřív se specifikuje start. index
            -> následně koncový. index
        
        - vypisuje se VYZNAČENÁ část a ta se ukladá jako nový array

        - syntax.: naz_arr.slice(začatek_index, konec_index);

        - tip - stačí vyplnit jen startovací index a od něj se vypíše celý zbytek arr.
        - tip#2 - hodnota koncového indexu se už nepřidá!

    6) .splice
        = vymezené hodnoty "vystřihne" (odstraní) NEBO je nahradí něčím jinným
            -> hodnoty se identifikují do ()
            -> nejdřív startovací index
            -> kolik položek chceme vymazat
            -> čím je chceme nahradit -> OPTIONAL (bez vyplnění se smažou, thats it...)

        -syntax: naz_arr.splice(začatek_index, počet_smazani, hodnota)
            -> hodnota => to čím chceme smazané položky nahradit (můze být více než 1)

        - destruktivní!! -> mutuje array!

        - taky lze přidávat hodnoty bez vymazání, pokud nastavím počet položek na 0
          -> hodnoty se budou přidávat od uvedeného indexu

    7) .sort
        = třídí array dle velikosti hodnot jednotlivých charů hodnot z leva
            -> u stringů, dle abecedy
            -> vše se default převede na string a porovnává se UTF-16 val.
            -> toto platí pokud do () nic nespecifikuji
        
        - do () se dá specifikovat porovnávací fce.
        - well...bez porovnávací func. kinda useless
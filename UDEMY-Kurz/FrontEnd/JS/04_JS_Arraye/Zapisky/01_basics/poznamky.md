**JS Arraye**
    - proměnná obsahující více hodnot v řadě zasebou (kolekce dat), které mohou být různého typu
    - např.: list komentářů na socce, playlist na spotify, ...

    tvoření:   
        - syntax: const nazev_prom = [];
        
        -> do [] píšeme nebo zařazujeme hodnoty
        -> hodnoty se oddělují , NIKOLI ;
        -> nikdy nepoužívat let !!! 
            -> hrozí přepsaní celého arraye na nějakou hodnotu!
        
    - viz.: 01_basics

    - tip - podud si dáme typeof [] tak se vráti object místo array

    1) manipulace s hodnotami
        
        - každá položka v arrayi má svůj specifický index
        - 1. položká má vždy index 0 a zbytek se inkrementuje vždy o 1

        1.1) pro přistupování k položkám stejné proces jako u arrayů
          -> podkážu se pomocí indexu a barcket notation -> nazev_prom[index]
            -> např. days[2] (viz.: 01_basics)
          
          -> při odkazování na index s neexist. hodnotou se vypisuje undefined
        
        1.2) přístup k hodnotě v hodnotě v arrayi
            - pokud mám např. 2 arraye v sobě tak lze jednodušše navázat 2 bracket notationy za sebe
          - syntax: nazev_prom[index][index]...

        1.3) update arraye (položky)
            = stejným způvobem přes bracket n.
            - syntax -> naz_prom[index] = hodnota;
            - tímto stylem lze již existující hodnoty měnit či přidávat nové

            - pokud chci přidat položku na idex před kterým položky nejsou,
              -> např. na index 10 když má arr jen 3 indexy 
             tak se všechny neexistující označí při výpisu jako empty, při jejich zavolání se vypisuje stále undefined
        
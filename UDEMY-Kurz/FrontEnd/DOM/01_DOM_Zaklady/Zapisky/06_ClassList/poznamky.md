**ClassList**
    = místo nastavování inline stylů či stylů přímo do DOM obj. můžeme HTML tagu(DOM obj.) přidávat nebo ubírat classy specifikované bokem v nějakém stylesheetu

   1) **přidání tagu pomocí setAttribute() - NENÍ classlist!!!**
        - přidáme tagu class pomocí naz_prom.setAttribute("class", "naz_class");

        - můžeme mít nastaven jen 1 atribut (1 class), pokud se pokusím nastavit 2 tak se to původní uvnitř class přepíše
   
   2) **classlist**
        = property uvnitř DOM objektu každého tagu
        - obsahuje předpřipravené metody pro ease of use
        - add => přidání classy do classlist "arraye"
        - remove => smaže class specifikovanou v ("");
        - contains => testuje jestli je class obsažena v classlist
                  - pomocí boolean logiky
        - toggle => "zapnutí/vypnutí" konkrétní class -> přidává či maže class
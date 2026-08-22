**Mongoose virtuals**

    => máme 2 typy funkcionality -> .get a .set
        -> dají se oba napsat za 1 stejný virtuál zároveň (chainovat za sebo pomocí dotNotation)
        -> virtuál potom bude schopen jak vypisovat hodnoty, tak je updatovat/manipulovat s nimi

    - zastupují hodnoty které ve schématu modelu/v DB nejsou přímo definovány/neexistují

    - umožňuje volání těchto hodnot či pomocí těchto hodnot manipulovat s jinnými ve schématu
    - existují pouze v js na straně mongoose nikoli v DB!!!

   1) .get

        -> vytvoří virtuální hodnotu v dokumentu/položce, kterou si můžu zavolat
            -> většinou kombinace více hodnot z dokumentu do jedné (viz. index.js)

        - volám stejně jako každou jinou hodnotu z dokumentu ( bez () )

   2) .set 

        -> přidá možnost virtuálu manipulovas s hodnotami v dokumentu
            - přidám fci do .set() a potom k tomu přistupuju jako kdybYch přepisoval normální položku
  
        - po definici normálně -> personNew.fullName = "Barrack Obama";         // .atd
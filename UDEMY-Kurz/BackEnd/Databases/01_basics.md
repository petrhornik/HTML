**Database**

    => místo pro uchování a strukturalizaci dat
    - lze efektivně pracovat s masivními obnosy dat
    - dobře škálovatelné
    - obsahují nástroje a metody pro jednoduchou konfiguraci, manipulaci, automatizaci, ...
    - zabezpečení dat made ez

    - v kurzu používám MongoDB -> document based NonSQL databáze

**SQL vs NonSQL**

    SQL = structured query language
        - specifický univerzální "dotazovací" jazyk pro komunikaci a manipulaci s DB
        - užívá: MariaDB, MySQL, PostgreSQL, SQLite, ...
        - máme předdefinovaná schémata tabulek do kterých vkládáme věci
          - tabulková struktura (něco jako +- excel)
        - NELZE vložit položku mimo definované tabulky

    NonSQL = nepoužívá SQL ani tabulky
            - existuje více typů -> docoment based, key-val based, graph store based
            - užívá: MongoDB, CouchDB, Neo4j, ...asdfghjklů     

        - document-based DB
            => data uložena v JSON či XML či jinak...
            - mužeme ukládat data v celku a nemusíme je rozdělovat do tabulek
              - další data lze uklýádat rovnou přímo do puvodního objektu/bloku bez nutnosti předdefinování tabulky, bloku atd.

            - např.:    blog post
                    [
                        {
                            "id": 1,
                            "author": "Petr",
                            "text": "HELLO, I LOVE LINUX!",
                            "comments": [
                                "some comment",             //komentáře k blog postu mohu ukládat přímo do bloku dat s postem bez nutnosti další tabluky/místa navíc
                                "some comment 2",               
                            ]
                        },
                        {
                            "id": 2,
                            "author": "Tom",
                            "text": "Just use Windows bro...",
                            "neco jineho": [
                                                        // bloky dat nemusí dodržovat identickou strukturu či mít pevně daný layout (nevznikají tak zbytečná místa v DB a šetří se prostor)
                            ]
                        }
                    ]
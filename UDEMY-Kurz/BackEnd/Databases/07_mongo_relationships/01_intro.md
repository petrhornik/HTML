**Mongo Relationships**

    = položky v databázi jsou mezi sebou většinou nějak provázány/asociovány 

    - lze přirovnat k foreign klíčum v SQL, či propojovacím částem mezi sql tabulkami

# Ukázka relations v případě SQL DB (tabulkové/relační DB)

    = navzájem provazujeme tabulky na nějakých datech

        - primárně ja nějakých ID
          - post na redittu budu provazovat s ID uživatele který ho vytavořil

        - můžeme vytvořit 2 vazby
          - N:M (one to many) -> spojení více položek z 1 tabulky na 1 položku z tabulky jinné
  
          - M:M (many to many) -> propojení více položek z jedné tabulky s více položkami z tabulky jinné
                              - potřebuju 3 tabulku co mi to bude propojovat na bázi ID z obou tabulek

## IMPORTANT

    = v kurzu je primary focus na N:M (one to many)
        - one to few/many/bilions/...
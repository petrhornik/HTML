tip - jedná se o funkcionality nodeJS

**Process**

    => objekt v global scope, obsahuje info o metodách co řídí daný nodeJS proces

    - process.release -> vypíše informace o konkrétní verzi node
    - process.cwd() -> adresář kde se momentálně pracuje
    - process.argv -> vypíše array cmd příkazů co se uskutečnily při spouštění procesu (našeho scriptu)
        -> např. odkazy na spuštěné soubory apod. 
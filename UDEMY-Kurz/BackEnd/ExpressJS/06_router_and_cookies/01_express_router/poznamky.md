**Express JS router**

    = instalce middelwarů a rout
        - budu mít routy rozdělené do více souborů pro lepší přehlednost u velkých aplikací

    - budu mít složku routes a v ní soubory vždy s nějakými routami kdy místo app použiju express.Router

    - v souborech místo app.* použiju router.*

    - následně samotný router ze souboru exportuju do indexu (hl. souboru kde se samotný app objekt z expressu)

    - v hl. souboru si to spojím do app pomocí - app.use("/prefix_routy", naz_routeru);
      - prefix_routy => vstupní bod pro celou skupinu
        - cesta v URL -> localhost:3000/prefix_routy/routa_ze_souboru

    - pokud nechci prefix tak tam dám jen / -> kořen

**Router + middleware**

    = funguje stejně jen místo app.use dám v souboru router.use

    - v souborech kromě rout lze do routeru specifik,ovat i express middleware co se použijej jen v onom souboru na routách co jsou jen tam :D
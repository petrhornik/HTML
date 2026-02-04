**Bootstrap DEMO**

    => ukázka importu souborů přes /public
        -> import přes app.use()

tip -> v kurzu je potřeba JQuerry, ale od bootstrap 5 není potřeba :D

        -> po importu klasická bootstrap syntax

**Partials**

    => určité komponenty co si napíšu bokem co se dají importovat do jednotlivých .ejs souborů
        -> opakované použití

    -> vytvořím si /partials uvnitř /views -> sem dám komponenty

    -> import partial do .ejs ve /views -> <%- include("partials/naz_souboru") %>
        
        -> toto naimportuje content a dosadí ho místo sebe

    -> kromě contentu jsem jdou prát i části či neuzavřené HTML tagy (pokud se uzavírají v jinném co se naimportuje pod!!)
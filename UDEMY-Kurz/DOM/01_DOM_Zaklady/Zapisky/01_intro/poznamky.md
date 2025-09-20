**kombinace JS s HTML a CSS**

**DOM**
  = document object model
  -> JavaScriptová reprezentace web. stránky
    -> umožňuje JS přistupovat do HTML a CSS obsahu stránky

  -> celá web. stránka je rozdělena do několika objektů se kterými může JS interagovat

  - např. pokud mám v HTML h1 tak v DOM bude existovat objekt reprezentující toto h1 apod.

 *Jak funguje?*
    = při načítání stránky v prohlížeči se vezme celkový obsah HTML a CSS na stránce a z toho se vetroří urč. počet několika JS objektů pro přistupovaní skrze JS
    - jednotlivé objekt jsou součástí stromové struktury DOM vždy začínající objektem <document> který všechno ostatní obsahuje

-> pro zobrazení výpisu celého dokumentu dám v prohlížeči do console -> console.dir(document)
    -> obsdahuje informace co je JS schopen zjistit z konkrétní web. stránky + je schopen s těmito položkami interagovat

  *Document*
    = JS objekt, který je vstupem do světa DOMu
    -> obsahuje reprezentace veškerého obsahu na stránce + další metody a properties

  *console.dir(document)*
    -> záložka all -> seznam všech HTML elementů na stránce

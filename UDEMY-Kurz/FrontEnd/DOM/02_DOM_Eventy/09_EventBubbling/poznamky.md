**Event bubbling**
    = pokud je akce co spustám v něčem vnořená, tak se provede i rodič dané akce
    -> akce vždy "vybublává" nahoru
        -> nejdřív se vykoná event nejbližší např. stisk tlačítka
        -> poté se provede event v jeho rodiči pokud existuje
        -> pokračuje se po všech rodičích až do body
    
    - tip -> pokud je prvek na který klikáme vnořen tak zároveň vždy klikáme i na roziče eventu

    - může se hodit, ale většinou je nežádoucí!

    - evt.stopPropagation -> bubbling se zastaví zde
          -> většinou u eventListeneru child komponenty, aby se neprováděla fce. rodiče
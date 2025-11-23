**Async Keyword** - zjednodušení promise pro async kód

    => syntaxe pro práci s asynchronním kódem (syntaxe založená na promises, ale s nimi jako takovými se nesetkáme)
    - vytvořím fci s async keywordem na začátku
        - tyto fce vždy vrací promise
          - pokud fce vrací hodnotu, tak se resolve provede s touto hodnotou
          - pokud fce. vráté err (exeption) tak promise prátí rejected
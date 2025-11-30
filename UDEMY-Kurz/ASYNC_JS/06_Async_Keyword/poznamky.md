**Async Keyword** - zjednodušení promise pro async kód

    => syntaxe pro práci s asynchronním kódem (syntaxe založená na promises, ale s nimi jako takovými se nesetkáme)
    - vytvořím fci s async keywordem na začátku
        - tyto fce vždy vrací promise
          - pokud fce vrací hodnotu, tak se resolve provede s touto hodnotou
          - pokud fce. vráté err (exeption) tak promise vrátí rejected

    - .then() => lze sem importovat data a pokud se splní promise tak te spol. s daty provede (fce. navíc i guess)
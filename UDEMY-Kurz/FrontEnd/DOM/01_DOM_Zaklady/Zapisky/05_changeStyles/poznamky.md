**měnění stylů pomocí JS**
  = použitím atributu .style u onoho selektoru
  -> .style => objekt obsahující veškerou možnou stylizaci
  -> k jednotlivým stylům lze přistupovat pomocí dotNotation -> selector_prom.styles.naz_stylu = "";

  - NELZE měnit styl pokud je hardcoded v HTML(NEDĚLAT!) <- set inline
  - JS má přednost před .css (JS se definuje až po stylesheetu v HTML)

  - pokud chci stylovat nějakou celou skupinu (např. všetky anchor tagy), tak si to musím uzavřít do loopu (nejlépe for...of) a následně přiřazovat styling postupně

  - pokud si chci zjistit jetli už existuje nějaký styl tak vypsáním z JS tag objektu to nejde, tam by default není nic i když existuje styl inline či v .css
    -> lze si to zobrazit pomocí window.getComputedStyle(naz_selectoru);
      -> do () se NEpíšou "" !!!!

    -> lze vyhledat i konkrétní stylizaci pomocí dotNotation viz.: app.js
**instalace packages**

    -> příkaz: npm install naz_package

        -> nainstaluje specifikovanou package

    - každý package má dependencies -> package + jeho dependencies se dá do složky node_modules

    - npm init -> vytvoření nového projektu bez instalace packages (vytvoří package.json se zákl. konmfigurací)

**package-lock.json**

    => evidence nainstalovaných npm packages (všechno v node_mudules složce)

**global x local installation**

    => packages nainstalované do konkrétní složky nebudou accessable mimo ni
        -> přistupovat lze jen ve stejné složce(či jejích podsložkách) kde je node_modules složka

    -> pokud chci něco dostupné odkudkoli použiju konfigurátor -g při instalaci ->npm install -g naz_package
    -> instaluje se do nejvyšší složky
        -> ve widlích: C:\Users\<uživatel>\AppData\Roaming\npm\node_modules
        -> global packages se přidají jako nové commandy (běží společně s node na pozadí OS)

    -> globální packages se musí do projektů importovat
        -> pomocí: npm link naz_global_package (spouštět ve složce projektu!!!)

            -> tip: s widlema se to moc nemusí (instalovat vše raději jako local)

**package.json**

    => poskytuje informace o projektu + jsou zde vidět dependencies projektu
        -> informace pro ostatní co budou chtít projekt rozběhat
        -> určuje hlavní (root) soubor apod.

    -> pro hromadnou instalaci dependencies, když si pullnu něčí projekt a chci ho spustit
    
    
    -tip: dependencies se vždy stahují separátně u každého (nikdy se nesdílí -> zabírají moc místa)
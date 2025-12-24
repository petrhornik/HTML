**Terminal**

    => CLI (interakce s PC pomocí textu)

    -> proč používat terminál? (BRUH)
        -> just use it!
        -> SPEEED
        -> přístup ke všemu a rychle
        -> tooly (node, DB, ...)

    terminal -> rozhraní pro zadávání příkazů
    shell -> program běžící v terminálu (bash, fish, zsh, ...)

**příkazy**

    ls -> vylistuje kontent konkrétní složky ve které sem, nebo kam specifikuju cestu
    
    pwd -> vypíše cestu adresáře, ve kterém momentálně jsem

    cd -> pro pohybování se mezi složkami v CLI

    mkdir -> vytvoří složku pod specifikovaným názvem a cestou

    man -> zobrazení manuálu pro specifikovaný příkaz (man ls, ...) -> neexistuje ve widlích

    touch -> vytvoří kompletně prázný soubor co neobsahuje ani příponu (formát a obsah souboru si potom doplním sám)

    rm -> kompletní smazání souboru bez možnosti návratu

    rmdir -> rm pro složky



**absolutní vs relativní cesty**

    absolutní -> vždy přímo specifikuju cestu C:/Users/Documents/Images -> cd /Users/Documents -> C:/Users/Documents

    relativní -> říkám např. že se mám posunou o složku zpět pomocí .. (neuvádím konkrétní/absolutní název kam se posunout)
                        C:/Users/Documents/Images -> cd .. -> C:/Users/Documents

**Command flags**

    => podobné JS metodám -> specifikování funkcionality příkazu
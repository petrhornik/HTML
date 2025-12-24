**JS Classes**

    => lepší způsob než Constructor Function (he said)

    -> keyword class <- pro vytvoření

    -> název vždy s Upper písmenem na začátku!!!

    -> 1. musím v class vytvořit constructor() <- spustí se hned po zavolání class (funkcionalita === constructor func.)

    -> při volání opět použít keyword new !!

    -> pro zavolání metody do jinné metody použiju jednodušše this.naz_metody a vrátí se mi její return

    -> metody zavolané do constructor() <- se provedou ihned p ozavolání class


**keywordy super a extends**

    => pro tvoření subclass a sdílení funkcionalit mezi classami

    -> předcházení vzniku duzplicitní funkcionality

    extends -> použíju pokud chci do class imnportovat funkcionalitu z jinné (nadřazené)
        
        -> pokud chci u nějaké class vlastní metodu, která funguje jinak než v nadřazením importovaném, tak si jí jednoduše o oné "subclass" vytvořím (bude mít prioritu oproti importované)

    super -> pokuch ci do vytvořeného objektu z "nadřazené class" přidat další hodnoty v "subclass", takto se odkazuju na původní (již obsažené) hodnoty
**pravdivé a nepravdivé hodnoty**
    = hodnoty dle kterých se rozhoduje o pravdě/neptravdě podmínek se dělí do těchto 2 skupin, ...how obvious am i right?

    - nepravdivé:
        -> false
        -> 0
        -> "" <- prázdný string
        -> null
        -> undefined
        -> NaN

    - pravdivé:
        -> vše ostatní

    = pokud chceme stanovit podmínku, která se provede jen pokud je hodnota v prom. pravdivá/nepravdivá tak stačí specifikovat jen samotný název prom. do () u if/else_if
        -> u nepravdy s ! -> (!nazev_prom)
    
        -> dobré např. pro validaci, že existuje v prom. hodnota, se kterou náš program může pracovat

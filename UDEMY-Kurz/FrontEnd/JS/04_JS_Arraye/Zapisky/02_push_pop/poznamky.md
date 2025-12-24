**Array metody**
    = přídavné fce. pro array volané pomocí dot notation (.)
    - syntax: naz_arr_prom.fce

    

    1) .push
        = přidá hodnotu na konec arraye
        - na další inkcementovaný index od posledního
        
        - viz.: 02_push_pop
        
        - syntax: naz_arr_prom.push(hodnota);

        - lze pushovat více hodnot najednou, v () oddělujeme pomocí ,

    2) .pop
        = opak push
        - smaže posledné hodnotu v arrayi

        - syntax: naz_arr_prom.pop(); <- není potřeba hodnota...obviously

    3) .shift
        = odebere prvek ze předu arraye
        - vždy odebere hned první hodnotu z arraye

        - syntax: naz_arr_prom.shift();

    4) .unshift
        = přidá prvek na předek arraye (vše ostatní se posune, inkrementuje)
        - lze přidat více položek najednou again...

        - syntax: naz_arr_prom.unshift(hodnota);

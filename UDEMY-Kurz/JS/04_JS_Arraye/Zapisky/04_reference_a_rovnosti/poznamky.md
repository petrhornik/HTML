**Rovnosti Arrayů**
    = 2 různě vytvořené arraye si NIKDY nebudou rovny po typové (===) stránce
    - dle referencí v paměti je každý uložen jinde => nejsou stejné

    - neplatí v případě pokud název_prom se kterým porovnáváme odkazuje na ten samý array v paměti (reference na původní array)


    - v případě == pokud jsou stejné hodnota jak bude výstup true
      -> srovnává pouze hodnoty nikoli typ
      -> musíme se na hodnotu odkázat přislušným indexem nebo si celý arr. převést pomocí JSON.stringify(naz_arr) a pak porovnat stringy ale that soon...
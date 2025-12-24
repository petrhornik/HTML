**Promises**
    => vrácený objekt reprezentující připadné OK provedení či chybu asynchronní operace
        - při fetchování dat od někud jinde
    - eventuelní záruka hodnoty nebo chyby
    - neakceptuje callbacky
    
    - 3 stavy - pending => právě probíhá
              - 2 konečné - rejected => nastala chyba - promise porušena
                          - fulfilled => úspěch - promise splněna

    OLD WAY
    
    - přímo do vráceného objektu (promise) jsou připojeny calbacky, místo toho aby se passovaly do fce. 
    - objekt si většinou uložím do proměnné
        -> callback fci. připojím do obj. pomocí metody .then()
        -> fci pro error připojím pomocí .catch()

            tip -> lze chainovat hned za promise fci. bez uložení do proměnné

    NEW WAY

    - navazující promise na předchozí lze returnovat
      - nemusím nestovat a jen dávám .then pod sebe, returnuje se mi vždy navazující promise
      - stačí 1 .catch jelikož se vždy pracuje na stejkné úrovni
      - do callbacků v .then a .catch lze také passovat data

    
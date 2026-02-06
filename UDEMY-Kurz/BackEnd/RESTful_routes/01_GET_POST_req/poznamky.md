**GET request**

    => pro získání informací/dat
    - data se posílají pomocí query string
    - data requestu jsou vidět přímo v URL
    - odesílaná data jsou velikostně omezena (2048 znaků)

**POST request**

    => odeslání dat na server
    - zápis, úprava, smazat
    - data se posílají pomocí request body (nejsou normálně vidět v GUI)
    - lze posílat různé druhy dat (např.: JSON)

tip -> GET a POST je dají použít k více věcem (než jsou určeny), ale not gut
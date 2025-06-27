**React eventy** - viz.: Nakup-list>Clicker.jsx
    = podobné jako eventListener u def. JS, pokud se nšco stane(např. stisk tlačítka) bude se na to nějak reagovat
    
    - přidávám přímo k renderovaným elementům: atribut onClick={}
           
            - např.: <button onClick={}>KLIKNI</button> apod.
            - do {} si většinou zavolám fci. nadefinovanou někde mimo či rovnou celý komponent > passovanou funkci vždy píšu BEZ () !!!!
                - spustí se funce, ale nebude fungovat eventListener!
            - jedná se o tzv. event handler

    typy: 1) onClick={}
                = spustí se při kliknutí na něco (hl. tlačítka)
            
          2) onDoubleClick={}
                = spustí se při dvoj-kliku na něco
          
          3) onMouseOver={}
                = když myší přejedu přes element s touto specifikací tak se něco stane (podobné jako hover v CSS)
          
          ... <- další typy dostupné na MDN

   # Eventové objekty -> viz. Nakup-list>
        = pokud např. stisknu klávesu(na klávesnici) tak chci vědět jakou klávesu jsem stiskl 
        
        - či pokud děláme event na odeslání form. tak nechceme aby se refreshovala stánka -> použijeme onSubmit={} handler u elementu form
                    - provede se vždy při odesílání onoho formuláře
                    - musí být v elementu <form> !!!!!
                    - přidáme event.preventDefault(); -> zamezí def. chování prohlížeče při urč. akcích (např. refresh u form submitu, apod.)
        
        = každý provedený event poskytuje oné fci. eventový objekt > je jedno jestli fce. využije nebo ne -> zavoláme(passujeme) do závorky pod nějakým jménem

tip - casto se to co se stane pri eventu definuje do arrow fce. u nějaké const proměnné !!!!!!

        
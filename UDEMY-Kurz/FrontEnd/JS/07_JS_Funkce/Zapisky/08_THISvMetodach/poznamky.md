**THIS keyword**
    = můžeme přistupovat k ostatním hodnotám uvnitř stejného objektu
    - často využivané v metodách pro interakci s ostatními položkami obj.
    
    - hodnota this závisí na kontextu volání fce. ve které je použit
      -> záleží kde bude fce. zavolána
        -> když si uložím fci. z objektu do nějaké prom. a tu spustím, ta nebude mít už přístup k položkám objektu

    - tip: this (CZ: toto) -> označení toho samého místa eg. toho obj.

    - v "globálním" kódu se this odkazuje na window objekt -> vytvoří se vždy při otevření stránky
      -> např. jakékoli fce. co zde nadefinuji se automaticky dají použít jako metody window objektu

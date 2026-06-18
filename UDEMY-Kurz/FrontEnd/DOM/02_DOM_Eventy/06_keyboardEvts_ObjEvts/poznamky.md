**Eventy dle inputů z klávesnice**
    => do () u každého listeneru je automaticky vždy passován tzv. callback objekt
        -> do () vložíme jakýkoli název jako parametr pro interakci s tímto obj.
            -> obvykle se pojmenovává např.: event nebo evt či pouze e
            -> tip: WebStorm má preset na evt :D
        -> použítí pro interakci s inputy z klávesnice a myši

    - typy listenerů interakci s klávesnicí
        1) keydown => detekuje ztlačení jakékoli klávesy
        2) keyup => detekuje puštění jakékoli ztlačené klávesy

    - pro zjištení jaká klávesa je ztlačena použíje evt

    - tip: v připadě typu click se nám vrací MouseEvent obj. a v případě keydown/keyup se vrací keyboardEvent obj.
    
    - evt.key - vrací stlačenou klávesu
    - evt.code - vrací kód klávesy(může být odlišný od evt.key)

    - pro vykonání akcí při urč. klávesách lze použít if či switch či další...

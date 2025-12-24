**for...of**
    = nejjednodušší způsob na loopování naskrz všemi položkami v arrayi
    - má syntax podobný jako v pythonu
    - není vůbec potřeba inkrementující proměnné ani podmínky jako u for
    
    - syntax: for (promenna of array_name){}; -> např.: for(item of zakazky){};
    
        -> v případě array_name se jedná o iratable (nemusí se jednat jen o array...)

    - do {} specifikujeme kód co s položkami manipuluje
      -> na položku se odkazujeme pomocí item -> index se inkrementuje automaticky po každém zopakování

    - tip -> druhy iterable: array(pložky), string(znaky)
**Formuláře v Bootstrapu**
    = tvorba formulářů
    -viz.:Forms>index.html

   1) input/select  
    
    - každý input musí mít v class form-control
        - přidá inputu/selectu/... default bootstrap styl + bootst. stylizaci
    - skupina 1 a více inputů uzavřená např. v divu -> div musí mít class form-group
        - seskupení formolářů do skupiny
    
    tip - veškeré inputy/form. skupiny bysme měli uzavřít do <form>

    prvky stylizace

        1) velikost
            - na jednotliné položky
            - form-control-{hodnota} -> např.: form-control-lg
            - hodnoty: sm, md, lg

   2) checkbox/radio

    - místo form-group se použije form-check
    - u inputu (checkboxu) se nastaví class form-check-input
    - pro label se nastaví class form-check-label

    - původní checkbox je nahrazen novým stylizovaným
    
    - DOPSAT RADIO TUTORIAL

**Form layout**
    = pozicování formulaře do nějakého celku
    - pomocí row a col again...
        - doporučení form-row => menší vel. gutterů mezi položkami
            - vzhledově kompaktnější 

    - formuláře/skupiny formů si uzavřeme do divu s class row a následně můžeme pozicovat pomocí grid systemu :D




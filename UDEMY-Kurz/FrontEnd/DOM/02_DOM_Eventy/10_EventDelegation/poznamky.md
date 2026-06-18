**Event delegation**
    => přidáme event listener parentovi místo child komponentám, abychom mohli manipulovat i s těmi child komponenty, které se vytvoří během běhu kódu

    -> např. můžu mazat položky uvnitř např. listu pomocí evt.target.remove() apod.

    -> pokud chci zjistit druh tagu targetu na který v parentu kliknu (např. pro omezení funkcionality na urč. tagy) -> použiju evt.tartget.nodeName

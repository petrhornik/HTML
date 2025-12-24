**Event delegation**
    => přidáme event listeneru parentovi místo child komponentám, abychom mohli manipolovat i s těmi child komponenty, které se vytvoří během běhu kódu

    -> např. můžu mazat položky uvnitř např. listu pomocí evt.target.remove() apod.

    -> pok chci zjistit druh tagu targetu na který v parentu kliknu (např. pro omezení funkcionality na urč. tagy) -> použiju evt.tartget.nodeName
**Call Stack**
    => mechanismus používaný interpreterem JS pro sledování své pozice v kódu při volání několika fcí.
        -> JS ví jaká fce. je momentálně prováděna a jaké další fce. jsou volány uvnitř této

tip => Stack === datová struktura v JS fungující na bázi LIFO (last in, first out)
            -> "přidáváme poslední, bereme první"
            
   0) princip
        -> script zavolá fci, interpreter ji přidá do call stacku, až poté se začne tato fce. vykonávat, fce. zavolané zevnitř této se přidají dále do stacku a jsou spouštěny až je jejich zavolání ve stacku dosaženo, když uje fce. dokončena tak ji interpreter odebere ze stacku a pokračuje na tom řádku kde skolčil

tip => pro vizualizaci posloupnosti stacku se dá využit latentflip.com/loupe (NEZABEZPEČENO!!), nefunguje s arrow fcemi.
        nebo debugger přímo v devtools (je v každém chromium-based prohlížeči) 
            -> přidávám breakpointy pro ukončení kódu v urč. části, vše potřebné poté najdu v záložce "Call Stack" + se vše dá krokovat jako ve VS22
**Call Stack**
    => mechanismus používaný interpreterem JS pro sledování své pozice v kódu při volání několika fcí.
        -> JS ví jaká fce. je momentálně prováděna a jaké další fce. jsou volány uvnitř této

tip => Stack === datová struktura v JS fungující na bázi LIFO (last in, first out)
            -> "přidáváme poslední, bereme první"
            
   1) princip
        -> script zavolá fci, interpreter ji přidá do call stacku, až poté se začne tato fce. vykonávat, fce. zavolané zevnitř této se přidají dále do stacku a jsou spouštěny až je jejich zavolání ve stacku dosaženo
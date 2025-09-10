// try a Catch

try{ // začne se tímto kódem dokud nenastane chyba (eg. až catch odchytí chybu/výjimku)
    hello.toUpperCase()
}catch(err){
    console.log("A JÉJE, MÁŠ TAM CHYBU")
    console.log(err);
}

//ukázka ve fci.

function fce(msg){ // lze použít i pro ověření jestli je hodnota argumentu správná bez erroru/zastavení kódu
    try{
        console.log(msg.toUpperCase());
    }catch(err){
        console.log("HELE HELE, jenom stringy!")
    }
};
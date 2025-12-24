// heslo musí mít 6+ znaků
// heslo nesmí obsahovat mezeru

const heslo = prompt("prosím zadejte heslo")

if(heslo.length > 6) {
    /*if(heslo.includes(" ")){
        console.log("heslo nesmí obsahovat mezeru!")    // .includes se správně, ale v kurzu používá metodu s .indexOf
    }*/
   
    if(heslo.indexOf(" ") === -1){                 //toto rohdování se provede jen pokud je to předchozí splňeno (v našem případě heslo.length > 6)
        console.log("Heslo splňuje kritéria!!")
    } else{
        console.log("heslo nesmí obsahovat mezeru!")
    }
} else{
    console.log("heslo musí mít alespoň 6 znaků")
}


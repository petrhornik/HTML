const den = 4;

//ukázka pomocí if; else_if
if (den === 1){
    console.log("Pondělí")
} else if (den === 2){
    console.log("Úterý")
} else if (den === 3){
    console.log("Středa")
} else if (den === 4){
    console.log("Čtvrtek")
} else if (den === 5){
    console.log("Pátek")
}else{
    console.log("Neexistuje")
}

console.log("---------------------------")

//ukázka pomocí switch

switch (den){
    case 1:
        console.log("Pondělí");
        break; // kdyby tady nebyl break, tak budou provádět všechny ostatní case až do konce nebo do jinného break;
    case 2:
        console.log("Úterý");
        break;
    case 3:
        console.log("Středa")
        break;
    case 4:
        console.log("Čtvrtek");
        break;
    case 5:
        console.log("Pátek");
        break;
    default: //zde zastupuje else, provede se vždy, pokud nedojde k breaku v urč. case (eg. splněné podmínky) tak se provede toto
        console.log("Neexistuje")
}
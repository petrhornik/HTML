// komponenta s použitím React state //

/*
------ NENENENE špatně!!!-------

export default function Counter() {
    let cislo = 0;
    const pricitaniCisla = () => {
        cislo += 1;
        console.log(cislo);
    }
    
    // React neví, že má znovu vykreslit komponentu, protože se změnila proměnná cislo
    // hodnota v prom. cislo se po stisku tlačítka bude měnit, ale v UI se nevyrenderuje
    
    return (
        <div>
            <p>Počet je: {cislo}</p> 
            <button onClick={pricitaniCisla}>Přičítání</button>
        </div>
    )
}
*/

/* použití react state pomocí useState */

import { useState } from 'react';

export default function Counter() {
    
    const [cislo, pricitaniCisla] = useState(5); // useState vrací pole, které obsahuje aktuální stav a funkci pro jeho aktualizaci
                                                 // definujeme přímo položky v useState arrayi formou destrukturalizace

    const zmenaCisla = () => {
        pricitaniCisla(cislo + 1); // lování fce. pro update stavu, způsobí opětovné vyrenderování komponenty
    }

    return (
        <div>
            <p>Počet je: {cislo}</p> 
            <button onClick={zmenaCisla}>Přičítání</button>
        </div>
    )
}
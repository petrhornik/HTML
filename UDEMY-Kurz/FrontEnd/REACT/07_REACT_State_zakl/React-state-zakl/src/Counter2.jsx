// test renderování komponentů viz.: useState() a renderování //

import { useState } from 'react';

export default function Counter2() {
    
    const [cislo, setCislo] = useState(5); // hodnota v useState je počáteční hodnota, která se použije při prvním renderování komponenty
    console.log('Komponenta Counter2 se znovu renderuje'); // zpráva se vypíše v console pokud je komponenta znovu renderována
    console.log('Aktuální hodnota cislo:', cislo);
    const zmenaCisla = () => {
        console.log("fce. zmenaCisla byla zavolana")
        setCislo(cislo + 1); // v případě zavolání této fce. se změní hodnota u state = React ví, že se má komponenta znovu vyrenderovat a bude se vracet upravená hodnota cislo
    }

    return (
        <div>
            <p>Počet je: {cislo}</p> 
            <button onClick={zmenaCisla}>Přičítání</button>
        </div>
    )
} // ke znovu renderování dojde vždy po kliknutí na button <- ten si zavolá fci. zmenaCisla
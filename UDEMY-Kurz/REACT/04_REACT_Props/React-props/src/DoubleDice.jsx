/* Hra o hodu 2 kostek -> 2 stejná čísla = win, jinak prohra */

/* řešení #1 */
/*

export default function DoubleDice(){
    const kostka1 = Math.floor(Math.random() * 3 + 1);
    const kostka2 = Math.floor(Math.random() * 3 + 1);
    const vysledekHry = kostka1 === kostka2 ? "Výhra" : "Prohra :("; 
    
    return(
        <div>
            <p>{vysledekHry}</p>
            <p> Hodnota 1. kostky: {kostka1}</p>
            <p> Hodnota 2. kostky: {kostka2}</p>
        </div>
    )

    
}

*/

/* řešení #2 */
/*

export default function DoubleDice(){
    const kostka1 = Math.floor(Math.random() * 3 + 1);
    const kostka2 = Math.floor(Math.random() * 3 + 1);
    
    return(
        <div>
            <p>{kostka1 === kostka2 ? "Výhra" : "Prohra :("}</p>
            <p> Hodnota 1. kostky: {kostka1}</p>
            <p> Hodnota 2. kostky: {kostka2}</p>
        </div>
    )

    
}

*/

/* řešení #3 - pokud prohra tak se element s textem vůbec nevyrenderuje */

/*
export default function DoubleDice(){
    const kostka1 = Math.floor(Math.random() * 3 + 1);
    const kostka2 = Math.floor(Math.random() * 3 + 1);
    
    return( /* JS syntaxi nemusíme uzavřít v žádném elementu a můževe uvnitř ní elementy vytvářet :D 
        <div>
            <h2>Hod kostkami</h2>
            {kostka1 === kostka2 ? <p>Výhra</p> : null} 
            <p> Hodnota 1. kostky: {kostka1}</p>
            <p> Hodnota 2. kostky: {kostka2}</p>
        </div> /* pokud bude podmínka True tak se vytvoří h3 element s textem "Výhra", pokud podmínka False tak se nevytvoří nic 
    )

    
}

*/

/* řešení #4 */

export default function DoubleDice(){
    const kostka1 = Math.floor(Math.random() * 3 + 1);
    const kostka2 = Math.floor(Math.random() * 3 + 1);
    const style = {color: kostka1 === kostka2 ? "green": "red"}; /* vytvoření dynamického stylu v rámci JS pomocí ternary op. uvnitř CSS vlastnosti */
    const vyherce = kostka1 === kostka2;


    return( /*&& (and) - může být použito i pro podmínky -> pokud bude podmínka True tak se provede část za && */
        <div className="double-dice" >
            <h2 style={style}>Hod kostkami</h2>
            {vyherce && <p>Výhra</p>} 
            <p> Hodnota 1. kostky: {kostka1}</p>
            <p> Hodnota 2. kostky: {kostka2}</p>
        </div>
    ) /* provede se jen poslední "and" položka -> pokud bych dal za výhru další && tak se provede jen to za &&!!! */

    
}
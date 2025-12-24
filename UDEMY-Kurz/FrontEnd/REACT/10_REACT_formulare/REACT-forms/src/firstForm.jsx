import { useState } from "react";

export default function FirstForm(){
    const [jmeno, setJmeno] = useState("") /* Obsah text inputu */
    
    const zmenaJmena = (evt) => {
        console.log("pokus o změnu!");
        console.log(evt.target.value); // vypíše konkrétní hodotu state + poslední změnu (v rákci onoho inputu )
        setJmeno(evt.target.value) //přepsání hodnoty state
    };

    return( // u labelu nelze použít for !!!
        <div>
            <h2>Proměnné textová pole v Reactu</h2>
            <label htmlFor="jmeno">Uživatelské jméno: </label> 
            <input 
                type="text" 
                placeholder="jmeno" 
                value={jmeno} 
                onChange={zmenaJmena}
                id="jmeno"
            />
            <button>Odeslat</button>
        </div>
    );
}
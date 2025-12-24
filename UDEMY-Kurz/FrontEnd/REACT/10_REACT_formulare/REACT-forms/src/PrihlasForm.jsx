//přihlašovací formulář

import { useState } from "react";

export default function PrihlasForm(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    
    const zmenaFirst = (evt) => {
        console.log(evt.target.value);
        setFirstName(evt.target.value)
    };

    const zmenaLast = (evt) => {
        console.log(evt.target.value);
        setLastName(evt.target.value)
    };

    const handleSubmit = () => {
        console.log(firstName, lastName)
    };

    return(
        <div>
            <h2>Několik inputů najednou</h2>
            <label htmlFor="Fjmeno">Jméno: </label> 
            <input 
                type="text" 
                placeholder="vyplň" 
                value={firstName} 
                onChange={zmenaFirst}
                id="Fjmeno"
            />
            <label htmlFor="Ljmeno">Příjmení: </label> 
            <input 
                type="text" 
                placeholder="vyplň" 
                value={lastName} 
                onChange={zmenaLast}
                id="Ljmeno"
            />
            <button onClick={handleSubmit}>Odeslat</button>
        </div>
    );
}
import { useState } from "react";

export default function PrihlasForm_Better(){
    const [udaje, setUdaje] = useState({firstName: "", lastName: "", passwd: "", })
    
    const zmenaDat = (evt) => {
        /*
        const zmenenePole = evt.target.name;
        const novaHodnota = evt.target.value;
        setUdaje((currData) => {
                currData[zmenenePole] = novaHodnota;
                return {...currData};
            })
        */

        //kratší zápis :D
        setUdaje(currData => {return {...currData, [evt.target.name]: evt.target.value}} )
    };

    const odeslatData = () => {
        console.log(udaje)
    };

    return(
        <div>
            <h2>state prom. všech inputů sjednoceny do 1 objektu</h2>
            <label htmlFor="Frjmeno">Jméno: </label> 
            <input 
                type="text" 
                placeholder="vyplň" 
                value={udaje.firstName} 
                onChange={zmenaDat}
                id="Frjmeno"
                name="firstName"
            />
            <label htmlFor="Lajmeno">Příjmení: </label> 
            <input 
                type="text" 
                placeholder="vyplň" 
                value={udaje.lastName} 
                onChange={zmenaDat}
                id="Lajmeno"
                name="lastName"
            />
            <label htmlFor="passwd">Heslo: </label> 
            <input 
                type="password" 
                placeholder="vyplň" 
                value={udaje.passwd} 
                onChange={zmenaDat}
                id="passwd"
                name="passwd"
            />
            <button onClick={odeslatData}>Odeslat</button>
        </div>
    );
}
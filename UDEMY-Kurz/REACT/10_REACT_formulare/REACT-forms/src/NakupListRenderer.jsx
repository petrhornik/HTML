import { useState } from "react";
import { v4 as uuid } from 'uuid'; //generování náhodných ID pro položky v .map
import NakupListForm from "./NakupniListForm";

//parent komponenta pro NakupniListForm.jsx

export default function ValNakupListRenderer() {
    const [polozky, setPolozky] = useState([
        {id: uuid(), product: "Banany", quantity: 8},
        {id: uuid(), product: "Maliny", quantity: 20},
    ]);

    const pridatPolozku = (item) => { //přidání polozky do arraye
        if(!item.product){
            return;
        };
        setPolozky(currItems => {return [...currItems, {...item, id: uuid()}]})
    };


    return(
        <div>
            <h2>Renderovac jednotlivych polozek listu</h2>
            <ul>
                {polozky.map((item) => {
                    return <li key={item.id}>{item.product} - {item.quantity}</li>
                })}
            </ul>
            <NakupListForm addItem={pridatPolozku} />
        </div>
    );
}
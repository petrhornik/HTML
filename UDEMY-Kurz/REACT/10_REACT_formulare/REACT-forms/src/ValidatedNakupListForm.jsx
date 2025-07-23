import { useState } from "react";

export default function ValNakupListForm({ addItem }) {
    const [formData, setFormdata] = useState({product: "", quantity: 0})
    const [isValid, setIsValid] = useState(false)

    const Validate = (val) => {
        if(val.length === 0){
            setIsValid(false);
        }else{
            setIsValid(true);
        }
    };

    const handleChange = (evt) => {
        Validate(evt.target.value);
        setFormdata((currData) => {
            return {...currData, [evt.target.name]: evt.target.value}
        });
    };

    const handleSubmit = (e) => { //provede se při submitu formulare
        e.preventDefault();
        addItem(formData); //zavolání propu addItem co obsahuje fci.
        setFormdata({product: "", quantity: 0, }); // reset objektu pro tvorbu položek pro renderovaný array
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Nákupní list s produky - s validací vyplnění</h2>
            {!isValid && <p style={{color: "red", fontWeight: "bolder",}}>pole produktu nemůže být prázdné</p>}
            <label htmlFor="product">Jm. produktu: </label>
            <input 
                type="text" 
                placeholder="pruduct name" 
                name="product" 
                id="product"
                onChange={handleChange}
                value={formData.product}
            />
            <label htmlFor="quan">Počet: </label>
            <input 
                type="number" 
                placeholder="quantity" 
                name="quantity" 
                id="quan"
                onChange={handleChange}
                value={formData.quantity}
            />
            <button disabled={!isValid}>Submit</button>
        </form>
    );
}
import { useState } from "react";

//child komponenta pro NakupListRenderer.jsx

export default function NakupListForm({ addItem }) {
    const [formData, setFormdata] = useState({product: "", quantity: 0})

    const handleChange = (evt) => {
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
            <h2>Nákupní list s produkty</h2>
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
            <button>Submit</button>
        </form>
    );
}
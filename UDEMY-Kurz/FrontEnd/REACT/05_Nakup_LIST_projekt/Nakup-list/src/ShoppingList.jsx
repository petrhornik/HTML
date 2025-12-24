/* komponent nákupního listu akceptující data v urč. formátu z nějaké databáze(v našem případě pouze z const data v App.jsx) */

import ShoppingListItem from "./ShopList_Item.jsx"; // import komponenty pro jednotlivé položky

function ShoppingList({items}) {

    return( /* barva definována pomocí ternary op. */
        <ul>
            {items.map (i =>  <ShoppingListItem {...i} key={i.id}/>)}
        </ul>
    )

};

export default ShoppingList;

// {...i} je v tomto případě to samé jako item={i.item} quantity={i.quantity} completed={i.completed}
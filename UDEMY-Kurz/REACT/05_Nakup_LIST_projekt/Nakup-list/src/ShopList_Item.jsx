/* samostatná komponenta pro vytvoření elementu v listu a nějakou dyn. stylizací */

function ShoppingListItem({item, quantity, completed}) { 
    const styles = {
                    color: completed ? "grey" : "red", 
                    fontWeight: "bold", 
                    textDecoration: completed ? "line-through" : "none"
                };

    return <li
                style={styles}>
                                
                {item} - {quantity}
            </li>
}

export default ShoppingListItem;
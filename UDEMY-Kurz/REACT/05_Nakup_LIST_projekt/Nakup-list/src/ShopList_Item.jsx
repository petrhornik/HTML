/* samostatná komponenta pro vytvoření elementu v listu a nějakou dyn. stylizací */

import PropTypes from 'prop-types'; // ukázka použití prop-types

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

ShoppingListItem.propTypes = {
    item: PropTypes.string, //item musí být string
    quantity: PropTypes.number, //quantity musí být číslo
    completed: PropTypes.bool //completed musí být true/false
};

export default ShoppingListItem;
import './App.css'
import ShoppingList from './shoppingList.jsx'

const data =[ /* nějaká data pro shopping list - normálně by se bralo z nějaké databáze*/
  {id: 1, item: "vejce", quantity: 12, completed: false},
  {id: 2, item: "mléko", quantity: 1, completed: true},
  {id: 3, item: "kuřecí plátky", quantity: 4, completed: false},
  {id: 4, item: "mrkev", quantity: 6, completed: true},
];

function App() {

  return (
    <>
      <ShoppingList items={data} />
      
    </>
  )
}

export default App

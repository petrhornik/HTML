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
      <h1>Nákupní seznam - mini projekt</h1>
      <h2>passování hodnot, key propy, ESLint, prop-types(bonus)</h2>
      <hr />
      <ShoppingList items={data} />
      
      
    </>
  )
}

export default App

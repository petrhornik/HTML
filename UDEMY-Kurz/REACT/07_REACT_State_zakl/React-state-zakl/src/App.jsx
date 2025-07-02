import './App.css';
import Counter from './Counter.jsx';
import Prepinac from './Prepinac.jsx';
import PocitaciPrepinac from './PocitaciPrepinac.jsx';
import Counter2 from './Counter2.jsx';

function App() {
  

  return (
    <>
      <h1>React State</h1>
      <hr />
      
      <Counter />

      <h2>Mini cvičení - přepínač pomocí useState</h2>
      <hr />

      <Prepinac />

      <h2>Více state prom. v 1 komponentu</h2>
      <hr />

      <PocitaciPrepinac />

      <h2>useState() a renderování</h2>
      <hr />
      <Counter2 />
    </>
  )
}

export default App

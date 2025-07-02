import './App.css';
import Counter from './Counter';
import Initial from './Initial';

function App() {
  
  return (
    <>

      <h1>state ukázky</h1>

      <h2>1) state s updater fcí. a re-render</h2>
      <Counter />

      <hr />
      <h2>2) state s inicializací</h2>

      <Initial />
    </>
  )

};

export default App

import './App.css';
import Counter from './Counter';
import Initial from './Initial';
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';
import EmojiClickerIDfunc from './EmojiClickerIDfunc';


function App() {
  
  return (
    <>

      <h1>state ukázky</h1>

      <h2>1) state s updater fcí. a re-render</h2>
      <Counter />

      <hr />
      <h2>2) state s inicializací</h2>

      <Initial />

      <h2>3) objekt uvnitř state</h2>
      <hr />
      <ScoreKeeper />

      <h2>array uvnitř state</h2>
      <hr />
      <EmojiClicker />

      <h2>array kde se dá interagovat s jednot. hodnotami díky key prop.</h2>
      <hr />
      <EmojiClickerIDfunc />

    </>
  )

};

export default App

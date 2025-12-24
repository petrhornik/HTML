import Lucky7 from './Lucky7'
import './App.css'
import LuckyGame from './LuckyGame'
import Dice from './Dice'
import { sum } from './utils'


//pokud je na kostkách méně než 4 tak win
function meneNez4(kostky){ //funkce co je passována do LuckyGame.jsx
  return sum(kostky) < 4;
};

function kostkySeStejnouHodnotou(kostky){
  return kostky.every(v => v === kostky[0]);
}

function App() {

  return (
    <>
      <h1>1 velká nemodulární komponenta</h1>
      <Lucky7 />
      <h1>aplikace složená z několika komponent (the RIGHT way)</h1>
      <LuckyGame pocet_kostek={2} winCheck={meneNez4} nazev="méně než 4"/>
      <LuckyGame pocet_kostek={5} winCheck={kostkySeStejnouHodnotou} nazev="stejné hodnoty"/>
    </>
  );
};

export default App;

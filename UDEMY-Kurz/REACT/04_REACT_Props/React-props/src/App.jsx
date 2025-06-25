import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MujKomponent from './mujKomponent';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';

function App() {
  const [count, setCount] = useState(0)

  return (  /* Heading -> test dynamické stylizace  */
    <div>
      <Heading barva="magenta" text="Vítejte!" fontSize="20px"/>
      <Heading barva="teal" text="Heading #2 s jinnou color prop!" fontSize="50px"/> 
      
      <h3>test props</h3>
      <hr />
      <Greeter name="Petr" from="Petr" />
      <Greeter name="Tom" from="Petr" />
      <Greeter name="Hubka" from="Angličtina" />
      
      <h3>test prop jiného typu než string</h3>
      <hr />
      <Die pocetStran={20} />
      <Die pocetStran={6} />
      <Die pocetStran={100} />
      
      <h3>test default hodnoty</h3>
      <hr />
      <Die pocetStran={undefined} />
      <Die />
      <Greeter />

      <h3>test passování arrayů a objektů</h3>
      <hr />
      <h4>ARRAYE</h4>
      <ListPicker hodnoty={[1 ,2 ,3, 4]} />
      <ListPicker hodnoty={["samsung", "apple", "xiaomi"]} />

      <h3>test podmínek(conditionals) - podmín. logika</h3>
      <hr />

      <DoubleDice />
      <DoubleDice />
      
      <h3>Renderování arrayů pomocí mapy</h3>

      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "orangered", "slategrey", "wheat"]} />

    </div>
  );

};

export default App;

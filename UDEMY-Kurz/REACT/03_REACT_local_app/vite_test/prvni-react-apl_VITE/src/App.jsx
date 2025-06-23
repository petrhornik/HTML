import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MujKomponent from './mujKomponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MujKomponent/>
      <MujKomponent/>
      <MujKomponent/>
    </div>
  );

};

export default App;

import { useState } from 'react';
import './App.css';
import SlotMachine from './slotMachine';

function App() {

  return ( 
    <div>
      <h1>greeter</h1>
      <SlotMachine value1="🍌" value2="🍌" value3="🍒" />
      <SlotMachine value1="🍎" value2="🍎" value3="🍎" />
    </div>
  );

};

export default App;

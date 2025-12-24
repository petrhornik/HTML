import { useState } from 'react';

function generateGameBoard() {
    console.log('Generating game board...');
    return Array(5000);
};

export default function Initial() {
    const [board, setBoard] = useState(generateGameBoard); //funkce se zavolá jen jednou při prvním renderu, ne při každém renderu komponenty
    return <button onClick={() => setBoard("HELLO!")}>Klikni pro změnu state</button>;
};
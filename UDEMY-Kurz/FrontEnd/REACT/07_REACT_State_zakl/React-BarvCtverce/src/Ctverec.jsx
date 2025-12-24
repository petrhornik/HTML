import { useState } from 'react';
import './Ctverec.css';

function getColor(array) {
    const indexBarvy = Math.floor(Math.random() * array.length);
    const vyberBarvy = array[indexBarvy];

    return vyberBarvy;
};


export default function Ctverec({barva}) {
        const [color, setColor] = useState(getColor(barva));
        const zmenaBarvy = () => {
            setColor(getColor(barva));
        };

    return (
        <div className='ctverec' onClick={zmenaBarvy} style={{backgroundColor: color}}>
        </div>
    );
}
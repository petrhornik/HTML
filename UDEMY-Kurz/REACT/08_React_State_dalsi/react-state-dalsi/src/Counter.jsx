import { useState } from 'react';

export default function Counter() {
    console.log('Counter component rendered');
    const [count, setCount] = useState(0); // count se neupdatuje okamžitě, ale až po přerenderování komponentu, do té doby se bude používat původní hodnota count
    const add1 = () => {
        setCount(count + 1);
    };
    const add3 = () => {
        setCount(count + 1);
        console.log(count);
        setCount(count + 1); // toto je špatně, jelikož se použije původní hodnota prom. count, ne ta upravená z předchozího setCount
        console.log(count);
        setCount(count + 1);
    }; // pokaždé bude probíhat puvodni_cislo + 1, takže se přičte vždy 1, ne 3

    const add3right = () => {
        setCount(currentCount => currentCount + 1); // zde se použije updater funkce, která vezme původní hodnotu count a přičte k ní 1
        console.log(count);
        setCount(currentCount => currentCount + 1); 
        console.log(count);
        setCount(currentCount => currentCount + 1); 
        console.log(count);
    };

    const setTo10 = () => {
        setCount(10); // nastaví count na 10 a provede přerenderování komponentu <- pokud už hodnota count byla 10, tak se nic nestane, protože hodnota se nezměnila (react nepotřebuje provést přerenderování)
    };

    return (
        <div>
            <h2>Counter komponent</h2>
            <hr />
            <p>Aktuální hodnota: {count}</p>
            <button onClick={add1}>+1</button>
            <button onClick={add3}>+3 BAD</button>
            <button onClick={add3right}>+3 RIGHT</button>
            <button onClick={setTo10}>změna počtu na 10 </button>
        </div>

    );
};
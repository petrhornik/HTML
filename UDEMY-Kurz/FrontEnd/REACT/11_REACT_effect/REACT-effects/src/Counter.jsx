import { useState, useEffect } from "react";

export default function Counter(){
    const [pocet, setPocet] = useState(0)
    const [text, setText] = useState("")
    useEffect(function myEffect() { //fci definujeme inline přímo do hooku
        console.log("useEffect se provedl, fce. zavolána - došlo k re-renderu komponenty");
    }, [pocet]) //omezení jen na re-rendery urč. state prom.


    const pricist = () => {
        setPocet(currPocet => (currPocet + 1));
    };

    const textEdit = (evt) => {
        setText(evt.target.value);
    };

    return(
        <div className="counter">
            <h2>{pocet}</h2>
            <button onClick={pricist}>+1</button>
            <input type="text" value={text} onChange={textEdit}/>
            <p>{text}</p>
        </div>
    );
}
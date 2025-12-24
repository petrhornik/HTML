// 1 velký a NEPRAKTICKÝ komponent ve je obsaženo vše pro aplikaci
//  -> u větších apl. náročné na údržbu

import { useState } from "react";
import { getRolls, sum } from "./utils.js";
import "./LuckyGame.css"

export default function Lucky7(){
    const [dice, setDice] = useState(getRolls(2)); //zde tvoříme pomocí fce z utils.js Array s hodnotami
    const won = sum(dice) === 7; //pokud se output ze sčítací fce. = 7 tak bude boolean hodnota won TRUE

    function roll(){
        setDice(getRolls(2));
    };

    return(
        <main className="Lucky7">
            <h1>hra Šťastných 7 {won && "You won!"}</h1>
            <section className="Lucky7-dice">
                <div className="Lucky7-die">{dice[0]}</div>
                <div className="Lucky7-die">{dice[1]}</div>
            </section>
            <button onClick={roll}>Hoď znovu !</button>
        </main>
    );
};

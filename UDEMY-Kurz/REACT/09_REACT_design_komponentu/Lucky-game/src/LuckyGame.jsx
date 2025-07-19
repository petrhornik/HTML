import { getRolls } from "./utils"
import { useState } from "react";
import Dice from "./Dice";

function LuckyGame ({ pocet_kostek=2, winCheck, nazev="hra s kostkami" }) {
    const [kostky, setKostky] = useState(getRolls(pocet_kostek));
    const vyhra = winCheck(kostky);

    function novyHod(){
        setKostky(getRolls(pocet_kostek));
    }

    return(
        <section className="pole_kostek">
            <h1>{nazev}</h1>
            {vyhra && <h2 style={{color: "green",}}>!!!Výhra!!!</h2>}
            <Dice kostky={kostky}/>
            <button onClick={novyHod}>Hodit znovu!</button>
        </section>
    )
};

export default LuckyGame;
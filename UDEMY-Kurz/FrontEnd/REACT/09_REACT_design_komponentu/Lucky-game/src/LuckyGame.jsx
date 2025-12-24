import { getRolls } from "./utils"
import { useState } from "react";
import Dice from "./Dice";
import Button from "./Button";

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
            <Button name="Hoď znovu!" func={novyHod}/>
        </section>
    )
};

export default LuckyGame;
import { useState } from "react";
import './ScoreKeeper.css'

export default function ScoreKeeper({target, players}){
    
    const [player, setPlayer] = useState(new Array(players).fill(0))

    const bodPlus = (id) => {
        console.log(id);
        setPlayer(player.map((p, idx) => {
            /*if (idx == id){
                return p != target ? p + 1 : p;
            }else{
                return p;
            }*/
           return idx == id ? (p != target ? p + 1 : p) : p; //když do ternary op. narveš další ternary op. protože why not XD
        }))
        
    };

    
    const smazatVse = () => {
        //setPlayer(currentPlayer => currentPlayer.map(p => p == 0)); !!toto nastavuje boolean hodnotu a nebude fungovat!!
        setPlayer(currentPlayer => currentPlayer.map(() => 0));
    };    
    

    return(
        <div className="komponent">
            <ul className="list">
                {player.map((p, idx) => {return (
                    <li key={idx} className="polozka-full">
                        <div className="polozka">
                            <p>player{idx} má {p} bodů</p>
                            <button onClick={() => bodPlus(idx)}>+1</button>
                        </div>
                        {p >= target && <h2>Dosažen počet bodů</h2>}
                    </li>)})}
            </ul>
            <button onClick={smazatVse}>Reset skore vsech hracu!</button>
        </div>
    );
}
// ukázka práce s objektem uvnitř state

import { useState } from "react";
function ScoreKeeper() {
    const [skore, setSkore] = useState({p1Score: 0, p2Score: 0}); // zde se vytvoří objekt s počátečními hodnotami skóre pro oba hráče

    function zvysitP1Skore() { // vytvoření nového objektu
         // zde se použije spread  pro vytvoření nového objektu, který obsahuje původní hodnoty skore a zvýší hodnotu p1Score o 1
        setSkore(oldSkore => {
            return {...oldSkore, p1Score: oldSkore.p1Score + 1}
        }); 
    };
    
    function zvysitP2Skore() { 
        setSkore(oldSkore => {
            return {...oldSkore, p2Score: oldSkore.p2Score + 1}
        }); 

    };
    
    return( // u polí hráčů se volají hodnoty obsahu objektu skore
        <div>
            <p>Hráč 1: {skore.p1Score}</p>
            <p>Hráč 2: {skore.p2Score}</p>
            <button onClick={zvysitP1Skore}>+1 Hráči 1</button>
            <button onClick={zvysitP2Skore}>+1 Hráči 2</button>
        </div>
    );
};

export default ScoreKeeper;

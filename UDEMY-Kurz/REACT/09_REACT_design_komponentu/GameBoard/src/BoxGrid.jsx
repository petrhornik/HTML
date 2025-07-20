import Box from "./Box";
import { useState } from "react";


export default function BoxGrid({ gridSize=8 }){
    
    const [boxGrid, setBoxGrid] = useState(new Array(gridSize).fill(false))
    
    const BoxReset = () => { //fce. pro reset všech polí
        setBoxGrid(new Array(gridSize).fill(false))
    };

    const toggleBox = (idx) => { //funkce pro změnu isActive u jednotlivých boxů
        setBoxGrid(oldBoxGrid => { //updater fce.
            return oldBoxGrid.map((value, i) => {
            if (i === idx){
                return !value
            }else{
                return value
            }
        });
        })
        
    };

    return( //.map => mapuje jednotlivé položky v arrayi jako hodnotu isActive pro komponent Box (těch se vyrenderuje tolik, kolik je položek v arrayi)
        <section className="BoxGrid"> 
            {boxGrid.map((value, idx) => <Box key={idx} isActive={value} clicked={() => toggleBox(idx)} />)}
            <button>Reset všech polí</button>
        </section>
    );
    
};
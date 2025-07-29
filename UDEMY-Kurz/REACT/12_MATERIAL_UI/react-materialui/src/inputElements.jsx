import TextField from "@mui/material/TextField";
import { useState } from "react";
import Slider from "@mui/material/Slider";

//ukázka zpracování formu pomocí MUI

export default function InputElements(){
    const [text, setText] = useState("");
    const [hlasitost, setHlasitost] = useState(75);

    const updateText = (evt) => {
        setText(evt.target.value)
    };

    const updateVol = (evt) => {
        setHlasitost(evt.target.value)
    };

    return(
        <div>
            <h2>Textové pole von MUI</h2>
            <TextField id="outlined-basic" label="Outlined :D" variant="outlined" value={text} onChange={updateText}/>
            <hr />
            <h2>Range input - Slider</h2>
            <Slider value={hlasitost} onChange={updateVol}/>
            <p>Hlasitost: {hlasitost}%</p>
        </div>
    );
}
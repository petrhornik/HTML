import TextField from "@mui/material/TextField";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

export default function SX_styling(){
    const [text, setText] = useState("");
    const [hlasitost, setHlasitost] = useState(75);

    const updateText = (evt) => {
        setText(evt.target.value)
    };

    const updateVol = (evt) => {
        setHlasitost(evt.target.value)
    };

    return(
        <Box sx={{border: '1px solid red', p: 2,}}>
            <h2>Textové pole von MUI</h2>
            <TextField id="outlined-basic" label="Outlined :D" variant="outlined" value={text} onChange={updateText}/>
            <hr />
            <h2>Range input - Slider</h2>
            <Slider value={hlasitost} onChange={updateVol}/>
            <p>Hlasitost: {hlasitost}%</p>
        </Box>
    );
}
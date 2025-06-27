// cviceni na sestavení jednoduchého přepínače pomocí useState //

import { useState } from 'react';
import './Prepinac.css';

/*
-----MOJE RESENI-----

export default function Prepinac() {
    const [prepinac, setPrepinac] = useState("😊");

    function prepnuti() {
        prepinac === "😊" ? setPrepinac("🤓") : setPrepinac("😊");
    }

    return (
        <h3 className="emoji-prepinac" onClick={prepnuti}>{prepinac}</h3>
    )
}

*/

// -----RESENI Z KURZU-----

export default function Prepinac() {
    const [prepinac, setPrepinac] = useState(true);
    const emojiSelect = () => {setPrepinac(!prepinac)};

    return (
        <h3 className="emoji-prepinac" onClick={emojiSelect}>{prepinac ? "🤓" : "😊"}</h3>
    )
}
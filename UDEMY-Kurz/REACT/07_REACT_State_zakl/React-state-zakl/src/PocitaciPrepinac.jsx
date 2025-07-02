import { useState } from "react";
import './Prepinac.css';
import './PocitaciPrepinac.css';

export default function PocitaciPrepinac() {
    const [prepinac, setPrepinac] = useState(true);
    const emojiSelect = () => {setPrepinac(!prepinac)};
    const [pocet, setPocet] = useState(0);
    const pocetKliknuti = () => {setPocet(pocet + 2)};
    const kliknuti = () => {emojiSelect(); pocetKliknuti()};
    
    const [pocitadlo, setPocitadlo] = useState(0);
    const zvysitPocitadlo = () => {setPocitadlo(pocitadlo + 1)};

    return (
        <div>
            <h3 className="emoji-prepinac" onClick={kliknuti}>{prepinac ? "🤓" : "😊"}</h3>
            <p>Počet kliknutí: {pocet}</p>
            <div className="samostatnePocitadlo">
                <p>Samostatné počítadlo: {pocitadlo}</p>
                <button onClick={zvysitPocitadlo}>+10</button>
            </div>
        </div>
    )       
}
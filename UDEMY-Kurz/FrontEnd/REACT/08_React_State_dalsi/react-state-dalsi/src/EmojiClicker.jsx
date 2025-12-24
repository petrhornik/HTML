// ukázka arraye uvnitř state prom.
import { useState } from "react";
import './EmojiClicker.css'


export default function EmojiClicker() {
    const [emoji, setEmoji] = useState(["🤓"]);
    let emojiPic = "🤓";
    const pridaniEmoji = () => {
        setEmoji(oldEmoji => [...oldEmoji, emojiPic])
    };



    return ( // jednotlivé položky z arraye se budou pomocí mapy vkládat do spanu
        <div>
            {emoji.map(e => <span className="emojiPole" >{e}</span>)} 
            <br />
            <button onClick={pridaniEmoji}>Klikni další emoji!</button>
        </div>
    );
};
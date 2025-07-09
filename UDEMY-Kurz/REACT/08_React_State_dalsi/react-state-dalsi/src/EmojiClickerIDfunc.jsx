// ukázka arraye kde se dá interagovat s každou v něm obsaaženou hodnotou díky ID

import { v4 as uuid } from 'uuid'; //import npm package uuid pro gen. ID pro key prop. u arraye
import { useState } from "react";
import './EmojiClicker.css'

function NahodneEmoji() {
        const emojiList = ["🤓", "🙃", "⭐", "🤣",]
        return emojiList[Math.floor(Math.random() *emojiList.length)];
    };

export default function EmojiClickerIDfunc() {
    const [emoji, setEmoji] = useState([{ id: uuid(), emoji: NahodneEmoji()}]); // objekt skládající se z 2 hodnot: hodnoty ID a naší hodnoty
                                                                      // - při renderování v mapě se naše hodnota dosadí k renderování a ID honota ke key prop.
    let emojiPic = { id: uuid(), emoji: NahodneEmoji()};
    const pridaniEmoji = () => {
        setEmoji(oldEmoji => [...oldEmoji, emojiPic]);
    };

    const smazatEmoji = (id) => {
        // smaže emoji na základě jeho ID
        console.log(id); // po kliknutí na jakékoli emoji v UI se do konzole vypíše jeho ID
        setEmoji(predchoziEmoji => {return predchoziEmoji.filter(e => e.id !== id)});

    };

// ukazka změny všech položek/hodnot v arrayi
    const vseSrdce = () => {
        setEmoji(predchoziEmoji => {return predchoziEmoji.map(e => {return {...e, emoji: "❤️"};})});
    };

    return ( // jednotlivé položky z arraye se budou pomocí mapy vkládat do spanu
        <div>
            {emoji.map(e => (
                    
                    <span className="emojiPole" key={e.id} onClick={() => smazatEmoji(e.id)}>{e.emoji}</span>
                
            ))}
            <br />
            <button onClick={pridaniEmoji}>Klikni další emoji!</button>
            <button onClick={vseSrdce}>Změnit vše na srdce!</button>
        </div>
    );
};
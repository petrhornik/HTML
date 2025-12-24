import { useEffect, useState } from "react";

const RANDOM_QUOTE_API = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
    const [moudro, setMoudro] = useState({text: "", author: ""});
    
    const zprava = (rq) => {
        setMoudro(rq)
    };

    

    async function fetchQuote() {
        const odpoved = await fetch(RANDOM_QUOTE_API);
        console.log(odpoved)
        const jsonOdpoved = await odpoved.json();
        console.log(jsonOdpoved)
        const randomQuote = jsonOdpoved.quote;
        console.log(randomQuote)
        zprava(randomQuote);
    };

    useEffect(  //😎👍
        () => { 
            fetchQuote(); //async fce. je vložená v normal. fci. a už je vše ok :D
        },
        []  
    );


    return(
        <div>
            <hr />
            <h3>{moudro.text}</h3>
            <h4>- {moudro.author}</h4>
            <hr />
            <button onClick={fetchQuote}>Moudra zdarma XD</button>
        </div>
    )
}
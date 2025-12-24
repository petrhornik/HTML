import { useEffect, useState } from "react";
import "./quoteLoader.css"

const RANDOM_QUOTE_API = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteLoader() {
    const [moudro, setMoudro] = useState({});
    const [nacitani, setNacitani] = useState(true); // rozhoduje o viditelnosi načítací zprávy
    const zprava = (rq) => {
        setMoudro(rq)
    };

    
    

    useEffect(  //😎👍
        () => { 
            async function fetchQuote() { // async fci. lze takto narvat přímo do useEffect
                const odpoved = await fetch(RANDOM_QUOTE_API);
                console.log(odpoved)
                const jsonOdpoved = await odpoved.json();
                console.log(jsonOdpoved)
                const randomQuote = jsonOdpoved.quote;
                console.log(randomQuote)
                zprava(randomQuote);
                setNacitani(false); // zmizení načítací zprávy
            };
            fetchQuote();
        },
        []  
    );


    return(
        <div>
            <hr />
            <p className="Loader" style={{opacity: nacitani ? "1" : "0",}}>Načítání...XD...</p>
            <h3>{moudro.text}</h3>
            <h4>- {moudro.author}</h4>
            <hr />
        </div>
    )
}
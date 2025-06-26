import "./slotMachine.css";

export default function SlotMachine({value1, value2, value3}){
    const values = [value1, value2, value3];
    const rozhodnuti = value1 && value2 && value3 === value1;

    return ( /* taky jde <h1>{value1} {value2} {value3}</h1> */
        <>
            <div className="hodnoty">{values.map(value => <h1>{value}</h1>)}</div>
            {rozhodnuti ? <h2 style={{color: "green"}}>Výhra</h2> : <h2 style={{color: "red"}}>Prohra</h2>}
            {rozhodnuti && <h3>GRATULUJI!!!</h3>}
        </>
    );
}
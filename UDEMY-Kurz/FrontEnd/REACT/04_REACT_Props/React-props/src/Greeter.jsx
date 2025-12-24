/*  
--zde bereme "celý props objekt" a pomocí dotNotation si vytahujeme jednot. props--

export default function Greeter(props){
    console.log(props.name)
    return <h1>Zdravím uživatele: {props.name}</h1>
}

*/

/* dosaženo pomocí destrukturalizace objektu na jednot. prvky */
/* při destrukturalizaci stačí do fce. specifikovat jednotlivé názvy props (prvky v obj.) u elementu volaného komponentu */
export default function Greeter({name="nespecifikováno", from="neznámo"}){
    console.log(name)
    return (
        <>
            <h1>Pozdrav pro {name}</h1>
            <h2>od {from}</h2>
        </>
    )
}
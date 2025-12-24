import "./Button.css"

export default function Button({ name="Tlačítko :D", func }){
    return(
        <button className="Button" onClick={func}>{name}</button>
    );
};
/* komponenta pro testování React eventů */

function handleClick() { // funkce, která se spustí při kliknutí na tlačítko
    console.log("Kliknuto!");
};

function prejetiMysi(){
    console.log("Přejel jsi myší přes text!")
}

export default function Clicker() {
    return (
        
        <div>
            <p onMouseOver={prejetiMysi}>Klikni na tlačítko či přejeď přes tento text :D</p>
            <button onClick={handleClick} >KLIKNI</button> 
        </div>
    )
}; //tvoření eventListenru the React way

// při volání(passování) fce. nikdy nepoužíváme závorky, protože by se fce spustila hned při renderování komponenty
// a už by nereagovala na kliknutí
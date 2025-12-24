//komponent kostky -> pouze vytvoří div obsahující passnutou hodnotu a to vrátí(return)

import "./Die.css"

function Die({hodnota, barva}) {
    return(
        <div className="Die" style={{backgroundColor: barva}}>
            {hodnota}
        </div>
    )
};

export default Die;
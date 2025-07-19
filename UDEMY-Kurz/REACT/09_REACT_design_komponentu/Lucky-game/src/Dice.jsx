// komponenta co vyrenderuje jednotlivé kostky a přířadí jim z arraye příslušné hodnoty
//  -> nadřazená pro Die
import Die from "./Die";

function Dice({ kostky, barva="blue" }) {
    return(
        <section className="Dice">
            {kostky.map((v, i) => <Die key={i} hodnota={v} barva={barva}/>)}
        </section>
    );
};

export default Dice;
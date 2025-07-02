import Ctverec from "./Ctverec";
import './Ctverce.css'




export default function Ctverce({barva}) {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<Ctverec barva={barva} />);
    }
    return (
        <div className="poleCtvercu">
            {boxes}
        </div>
    )
};
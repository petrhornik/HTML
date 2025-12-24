import "./Box.css"

export default function Box({ isActive, clicked }){

    return <div onClick={clicked} className="Box" style={{backgroundColor: isActive ? "red" : "blue",  }}></div>
};
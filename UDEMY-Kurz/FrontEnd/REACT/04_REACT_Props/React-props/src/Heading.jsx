export default function Heading({barva = "olive", text, fontSize}) {
    return <h1 style={{color: barva, fontSize: fontSize}}>{text}</h1> /* passtrough barvy */
}
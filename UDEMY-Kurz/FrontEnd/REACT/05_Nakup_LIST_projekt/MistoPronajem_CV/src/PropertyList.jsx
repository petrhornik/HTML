import Property from "./PropertyItem"
import "./PropertyList.css"

export default function PropertyList({ mista }) {
    return (
        <section className="property-list">
            {mista.map(misto => <Property {...misto} key={misto.id}/>)}
        </section>
    )
}
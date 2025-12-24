import "./PropertyItem.css";

export default function Property({ name, rating, price }) {
    return (
            <div className="property" >
                <h2>{name}</h2>
                <h3>${price} za noc</h3>
                <h4>{rating} ⭐</h4>
                
            </div>
    );
}
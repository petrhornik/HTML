/* test použití arraye v komponentu a jeho render */

export default function ColorList({ colors }) {
    const elementy = [<p>AHOJ!</p>, <p>NASHLE!</p>];
    /*const barvyVyber = colors.map(color => <li>{color}</li>)*/
    return (
        <div>
            <p>---List barev---</p>
            <ul>{colors.map(c => <li style={{color: c}}>{c}</li>)}</ul>
            
            <hr />
            {elementy}
        </div>
    )
}
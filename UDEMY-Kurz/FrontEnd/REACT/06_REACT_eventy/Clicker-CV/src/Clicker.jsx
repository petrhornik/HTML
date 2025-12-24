// vypracování úkolu cviceni

export default function Clicker({ message, buttonText }) {
    const kliknuti = () => {
        alert(message);
    }

    return (
        <button onClick={kliknuti}>{buttonText}</button>

    )
}
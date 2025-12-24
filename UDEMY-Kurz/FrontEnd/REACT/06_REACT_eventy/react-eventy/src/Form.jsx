function handleFormSubmit(event) {
    event.preventDefault(); // zabráníme defaultnímu chování prohlížeče, které by provedlo refresh stránky
    console.log("Formulář odeslán!");
    console.log(event); // vypíše eventový objekt -> co se stalo, kdy, kde, jak, proč atd.

}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>ODESLAT FORM.</button>
        </form>
    )
};

// - při odeslání form. nechceme aby se refreshovala stránka -> přidáme onSubmit handler
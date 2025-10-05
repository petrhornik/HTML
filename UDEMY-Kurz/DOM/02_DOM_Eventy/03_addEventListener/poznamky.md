**addEventListener**
    = základní/univerzání metoda pro přidávání eventů
    - syntax: btn.addEventListener("click", () => {fce});
    - potřebujeme nejdřív proměnnou odkazující na tergetovaný HTML element
    - na 1. místo v () specifikuju kdy se event provede
        -> existuje několik druhů eventů
    - dále specifikuju fci co se provede

    - může spouštět více fcí. za sebou (odděleně)

    - lze přidávat "nastavení (options)"
        - do obj. {}
        - uřč. key-valy kterým lze nastavit true/false hodnota
        - lze je najít na MDN
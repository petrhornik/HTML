**Vytvoření nového elementu pomocí DOM**

// vytvoření elementu v DOM

   1) document.createElement()
        => vytvoří nový element dle specif. názvu tagu v ()
        - syntax: document.createElement('tag_name, options')
          -> nebo přidám propy pomocí dotNotation např. newIMG.src = ""; apod.

// přidání elementu do HTML

   2) .appendChild
        => element přidáváme jako child do nějakého jiného
        - syntax: document.body.appendChild(newIMG);
          -> např.: pro přidání do body elementu
            - místo body se udává název HTML elementu kam se náš vytvořený přidá
            - tip: appenduje se vždy jako poslední child urč. elementu

   3) .append
        => novejší metoda pro vložení NEJEN DOM obj. do HTML
        - můžu vložit více elementů najednou :DD
        - lze vkládat i content přímo do elementů (např. text)
        - vkládá vždy na konec kontentu či elementu

   4) .prepend
        => jako .append, ale vkládá vždy na začátek obsahu či elementu
        - vložený DOM, objekt bude 1. child elementu či na začátku textu apod.

   5) .insertAdjacentElement()
        => když chci něco vložit mezi 2 elementy, či na jinou urč, pozici
        - syntax: targetElement.insertAdjacentElement(pozice, element)
          - position:
            - beforebegin -> před samotný element
            - afterbegin -> jako 1. child onoho elementu
            - beforeend -> jako poslední child onoho elementu
            - afterend -> za samotný element
   
   6) .after
        => přidá můj DOM obj. za targetovaný HTML element
        - syntax: target_element.after(prom_DOM_obj)
   
   7) .before
        => opak .after
      
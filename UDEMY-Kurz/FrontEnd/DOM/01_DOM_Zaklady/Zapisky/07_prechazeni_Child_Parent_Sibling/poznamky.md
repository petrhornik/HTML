**Navigace napříč Parenty, Childs a Siblings**
    = sada objektů používající se pro navigaci napříč elementy

// PARENT

   1) .parentElement
        => posune nás do rodiče (nadřazeného) odkazovaného elementu
        - přidám pomocí dotNotation za naz_prom_DOM
        - dotNotation lze "stackovat" za sebe
          -> vždy nás posune o úroveň výš 

// CHILD
    
   2) .children
        => pro zjištění kolik "child" elementů je vnořeno v urč. elementu
        - vrací číselnou hodnotu spol. s výpisem arraye, který obsahuje DOM objekty tagů jednotlivých elementů
        - z arraye si můžeme hodnoty brát pomocí indexace
      
   3) .childElementCount
        => vrací pouze číselnou hodnotu pro počet child elementů uvnitř urč. elementu

// SIBLING

   4) .nextSibling a .previousSibling
        => vrací nejbližší prvek z hlediska NODE
        - kinda USELESS

   5) .nextElementSibling a .previousElementSibling
        => vrací nejbližší ELEMENT z hlediska HTML

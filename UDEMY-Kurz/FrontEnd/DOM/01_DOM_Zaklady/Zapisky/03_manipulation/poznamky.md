**Manipulation**
  = provádění něčeho se selektovanými HTML elementy (např. s obsahem v nich)

 1) innerText
  = může updatovat vnitřní obsah HTML elementu
    -> např. text uvnitř <p> apod.

 2) textContent
  = při výpisu zobrazí všechny elementy obsažené v urč. elementu
    -> innerText skryté elementy vynechá!
    -> funkcionalita +- stejná jako u innerText

  - textContent a innerText jsou schopny měnit obsah z hlediska textu, ale nejsou schopny menit obsah za jiné elementy

 3) innerHTML
  = schopno měnit content elementu pomocí celkových možností html markupu nikoli jen textu

    -> nebo můžu do původního contentu jen přidávat bez smazání toho původního pomocí +=

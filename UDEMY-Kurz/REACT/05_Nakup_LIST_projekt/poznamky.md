**ShoppingList mini-projekt**
    = vytvoření jednoduchého nákupního listu s položkami passovanými odjinud

    - v App.jsx const data <- má představovat databázi s daty v nějakém formátu
    
    - skoro všude se používá ternary operator!!!!!!!

   # Key prop
         = unikátní identifikátor pro každý element v listu (react vyžaduje)
        - při řešení dynamičnosti(např.: přidání/odebrání elementu) je potřeba
        - přidáme do li v mapě či individuálně -> větčinou má každý element přiděléné unikátní ID 
            - id mají elementy přidělené větš. z databáze

   # item komponenta nákup. listu
        = přesuneme vytváření <li> elementů z ShoppinList.jsx do samostatného komponentu
            = každá položka listu bude komponent
        - simplify původní fin. komponent
        tip - více smol. komponentů > velké komponenty
                 - modularita
        - musíme passnout jednot. hodnoty
        - pokud máme názvy a názvy očekávaných hodnot ve fci. stejné -> tak můžeme passovat pomocí spread (...) viz.: ShoppingList.jsx
            - vezme veškeré hodnoty z i a individuálně je passuje do komponenty

**Místo k pronájmu cviceni**
    = cviceni na to co se ted z reactu bralo (zadani na UDEMY)

**Konfigurace ESLint**
    = linter co nám pomáhá psát lepší kód
    - při vytvoření projektu přes Vite se samo vygeneruje

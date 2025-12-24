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
    = linter(pomůcka) co nám pomáhá psát lepší kód
    - při vytvoření projektu přes Vite se samo vygeneruje
    - preventuje chyby (např.: hlídá keypropy apod.)
    - prop-types (řve když passované hodnoty nemají definovaný druh)
        - vyplatí se prostě vypnout :F
        - do ESLint > rules přidám 'react/prop-types': 'off', <- viz. Nakup-list>eslint.config.js

**prop-types**
    = můse se hodit jako prevence rozbití kódu, když přijde jiný typ dat než je očekáváno -> dnes se už moc nesetkám
    - v rámci Vite instalováno automaticky
    
    - u fce. kde chci prop-types využít si vytvořím objekt > NAZEV_FCE.propTypes = {passovana_hodnota: PropTypes.druh_hodnoty,}

    - dnešní ver. Vite už prop-types neposkytuje a je to broken když dohraju


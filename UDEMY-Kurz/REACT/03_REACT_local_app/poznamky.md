**Vývoj a tvoření React apl. lokálně**
    = vývoj přímo v mém zařízení
    - použití programu Vite

**Vite** = very gut :DD
    = pomůcka pro generování front-end dev. enviromentů(prostředí) (viz. vite.dev)
    - kromě Reactu umí i svelte env., valilla TS env., apod.
    
    - env. vytvoříme pomocí NPM -> npm create vite@latest 
        - v nabídkách si zvolím jméno a druh evn. + co za jaz. v env. použiju
    - vytvoří env. podobný tomu v codesandbox.io
    - po vytvoření vždy dát npm install pro instalaci potřebných balíčků!!!
    - poté spustím live server pomocí npm run dev a muzu delat :D
    
    tip - jée jedno jestli přípona aplikace bude .js nebo .jsx (.jsx = lepší i guess...)
    - funkčnost live serveru si ověříme změnou <h1> v def. konfiguraci a kouknu jestli se to změnilo na live serveru

**Create react app**
    = npm balíček pro jednoduché setupnutí env. pro vývoj reactu
    - instalace: npx create-react-app my-app
    - updaty: npm install react-scripts@latest
    - dnes se už moc nevyplatí kvůli rychlosti a stáří oprati např. vite apod.

**Struktura ve Vite projektu**

    1) vše používané k sestavení fin. webu se ukládá do složky src
        - veškeré komponenty, stylizace, další položky(např. obrázky)
        - pozice hlavního main.jsx - zde definujeme co kde jak renderovat
        - komponenty by měly mít samostatné .css soubory
        - předpřipravené App.css a index.css <- pro stylizaci celkové aplikace a stránky kde se renderuje
        tip- vše všeobecné dát do index.css a zbytek přiřazovat k jednotlivým komponentům
    
    2) index.html do kterého se veškerý kód ze src převádí se nachází "hozen" uvnitř hl. projektové složky
        - uvnitř definovaný div s rolí root <- zde se renderuje react komponenta/y
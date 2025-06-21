**import/export komponentů**
    - kód se běžně rozdělení do více souborů pro lepší modularitu a přehlednost
        - každý komponent dostane svůj soubor <- všechny soubory jsou ve složce src
    
    - pro import/export používáme syntaxi ES6 module
    - komponent co chci importovat jinde musím t původního souboru vždy exportovat!!!!
            - u komponentu co chcic exportovat napíšu před function -> export default (nejpoužívanější způsob) lze exportovat pouze 1 komponenta z celého souboru
            - tip -> lze exportovat i po definování
                            1) nadefinujeme komponent (fci.)
                            2) export default [NAZEV_KOMPONENTU]; viz.: JSX_detailneji.url

   # pro export více individuálních elementů
        - syntaxe: export {NAZEV_FCE, NAZEV_FCE2, ...}; např.: export {Pes, Greeter, Vypocet};
        - při importu musím přidat k názvu importované fce. {}, např.: import {Pes} from "./Pes" (viz. JSX_detailneji.url)

**JSX pravidla**
    
    1) musím výslovně zavírat samozavírací elementy (např.: <br/> nebo <input type="" /> apod.)
    2) komponenky mohou vracet pouze 1 element
    3) pokud returnuju něco dlouhéhe uzavču to do závorek <- just for přehlednost :D

**React fragmenty**
    = pokud chci returnovat více tagů, ale nechci aby byly součástí divu, sectionu, formu, apod. tak je uzavřu do fragmentu
    - syntaxe: 
                <>
                    <h1>eerhear</h1>
                    <h2>tsferh</h2>
                    <p>lorem ipsum dolor sit ametgfreswauhaui</p>
                </>
    
    - returnují se jednotlivé NEUZAVŘENÉ elementy
    - existuje čistě pro uspokojení pravidel JS

**vyhodnocování výrazů JS v JSX**
    = pro přidání dynamických hodnot do JSX contentu (pro vytváření šablon (templatů))
    - přidáváme do HTML elementů do {} <- obsah uvnitř se bude chovat jako klasický JS
        - můžeme provádět JS operace či např.: vytahovat hodnoty z objektů/proměnných a zobrazovat je zde
        např.:
                function Pes() {
                    const pet = "Bert";
                    return <p> {pet} říká HAFHAF!!!!</p>;
                }

                export default Pes;
    
    - více viz.: JSX_detailneji.url

**Vytvoření Die komponentu - mini projekt**
    = komponent "hození kostky" <- generátor náhodných čísel
    - tvorba vlastní komponenty pro hod kostkou pomocí knihovny Math ( Math.floor() a Math.random() )
    - jedná se o dynamický komponent (nejdřív se vygeneruje hodnota a až poté je renderován)
    - viz. JSX_detailneji.url

**Rozklad komponentů**
    = rozložení velké stránky a komplexního UI na menší části -> poté z těchto malých částí složíme větší části -> z těch na ještě větší části -> z těch na fin. stránku
        - využití vnořené (nested) hierarchie
    - např. pokud chci házed 3 kostkami tak si na to vytvořím samostatný komponent místo 3x zavolání Die komponentu
    - snažím se co nejvíce funkcí v hl. App.js rozložit do jednotlivých komponentů (hod kostkou, leaderboard, pokusy, body, ...)

**Stylizování komponentů**
    = úprava stylu/vzhledu komponentu a jeho obsahu pomocí CSS
    - místo class="" se musí použít className="" !!!!!!
    - každý komponent by měl mít svou stylizaci ve vlastním souboru (nepoužívat obecný style.css) např. pro Die.js by se měl vytvořit Die.css apod.
    - css soubory se importují přímo do JS souborů (nejlépe přímo k těm komponentám co stylizujeme) -> pro lepší přehlednost
    - syntaxe: import "./[NAZEV_CSS_SOUBORU].css"
    - stylizace funguje i v případě že ji importuji do nějakého komponentu který si později zavolám někam jinam -> tak i tam bude stylizace fungovat pro všechny elementy se stejným className=""
    - viz. JSX_detailneji.url

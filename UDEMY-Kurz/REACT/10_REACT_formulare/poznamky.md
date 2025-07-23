nápověda - NTDIP = nice to do if possible

**React formuláíře**
    = tvoření a submitování HTML furmulářů v Reactu

    - obsah každého formu je obsažen v nějakém state, který se při každé změně updatuje
        - to co např. v poli s textem vidíme je actually obsaženo v state
        - react řeší co je zobrazeno v input elementu + co se stane při interakci s userem -> onChange={}

    - do inputu přidám atribut value={} <- do {} napíšu název state prom.
    - onChange={} <- atribut pro input - triggrne se vždy když proběhne v inputu změna
    - evt - objekt eventu z inputu -> hodí se např. u změny/úpravy obsahu inputu viz. firstForm.jsx
      - evt.target.value -> vytáhne z eventu původní hodnotu state + poslední úpravu   

   1) htmlFor
        = přiřazování labelu k inputu
            - for je rezernovávo JS
            - místo for="" použijeme htmlFor=""
            - stejné problém jako s className=""

    - tip - většina state prom pro formy začíná "" pokud se nejedná o typ True/False

   2) veškerá data z formuláře se dají ukládat do objektu (do 1 state prom.) - NTDIP
        -> díky tomuto nám stačí 1 fce. na zpracování úprav/změn
        - jako název položky v objektu zvolíme název konkrétního inputu
          - pomocí evt.target.name a operátoru spread (...) pak hodnoty můžeme měnit
            - nezapomenout nadefinovat name="" u inputů
            - viz.: PrihlasForm_Better.jsx

   3) použití hodnoty (proměnné) jako název položky v objektu
        = lze použít pro tvorbu nových položek co objekt neobsahuje
        - např.: 
                    const mystery = "slepice";
                    const obj = {}
                    obj[mystery] = "kuře"
                    console.log(obj)

                    > {slepice: 'kuře'}
        - viz.: NakupListForm.jsx
   
   4) řažení objektů do arraye
        = vhodné např. pro renderování seznamů
        - např. když mám 1 položku co obsahuje několik hodnota a následně chcí více takových položek například vypsat jako seznam
        - viz.: NakupListRenderer.jsx

    - pokud chceme vytvořit list nějakých objektů
            1) vytvoříme se komponentu pro vytváření položek - state s objektem
            2) vytvoříme si komponentu pro renderování listu - state s arrayem
                    - vytvoíme fci pro přidávání položek(obj) do arraye a passneme ji do toho 1 komponentu
                      - zde fci. zavoláme a přidáme jí do () položku -> objekt

    - tip - sice nemůžeme passovat data "nahoru", ale child komponenta může upravovat state prom. v rodiči
    - tip#2 - pokud převádím array pomocí .map tak musí mít každá položka unikátní ID
                - použijeme uuid again...

**Validace formuláře**
    =kontrola vyplňování(např. jestli jsou mandatory pole vyplněna, sedí číselné hodnoty, ...)
   
   1) validace vlastním provedení   
        = samostatný state prom. co určuje True/False
        - zvládne validovat jen 1 hodnotu/1 input -> není moc dobré
        - vytvoříme fci která bude na základě value inputu nastavovat boolean hodnotu state prom.
        - na bázi boolean hodnoty se bude vypisovat zpráva o povinnosti vypln. pole, zablokování submit tlačítka, apod.
        - viz.: ValidatedNakupForm.jsx

    - tip - zablokování tlačítka -> disabled={true/false}

   2) validace pomocí hooku (React Hook Form) - the right way!
        = hook pro validaci formu
        - docs: react-hook-form.com/get-started/
        - install: npm install react-hook-form
        - viz.: FormDemo.jsx

        - hook: useForm();
            - fce:
                - register <- registruje specifické individ. inputy do hooku
                  - registerOptions.NAZEV_POLOZKY <- dodatečné nastavení pro register - definujeme v samostatné fci.
                - handleSubmit() <- vložíme do onSubmit={} u formu a do () voláme fci. co chceme po úspěšné validaci spustit
                - errors?.NAZEV_POLOZKY && errors.NAZEV_POLOZKY:message <- hledá jestli se někide při validaci vyskytla chyba - pokud ano tak vypíše zprávu <- specifikujeme do registerOptions fce.
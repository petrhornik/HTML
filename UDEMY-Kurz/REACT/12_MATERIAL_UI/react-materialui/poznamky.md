**Material UI**
    = knihovna s přepřipravenými react komponenty pro vývoj FE
        - tlačítka, grafy, ikony, ...
        - podobné bootstrapu

    - použijeme MUI Core
    - mui.com/material-ui
      - seznam jednotlivých komponentů

   1) instalace
        - npm install @mui/material @emotion/react @emotion/styled
        - doporučeje se nainstalovat/importovat Roboto font
        - ikony -> npm install @mui/icons-material

   2) list komponent
        - na webu list komponent s kódem + co importovat
  
   3) změna vzhledu/stylu
        - kazdý MUI komponent má urč. varianty
        - pomocí propu variant="" definujeme jakou variantu chceme

   4) barvičky
        - MUI má predefined paletu barev
          - můžeme paletu upravit
          - barvu definujeme pomocí propu!! color="" (platné hodnoty např.: secondary, alert, succes, error, ...)

   5) velikost
        - prop size=""
          - hodnoty: small, medium, large
          - tip - medium je default :D

   6) obsah
        - default obsahuje text, ale může obsahovat i ikonu
        - při použití ikony v rámci icons-material musíme každou ikonu zvlášť importovat
        - komponent ikony je uzavřen v komp. IconButton
          - viz.: firstMUIcomponent.jsx

**Ukázky komponentů**

   1) rating komponent
        = 1 z nejpožívanějších v rámci MUI
        - viz.: ratingComponent.jsx
        - velmi upravovatelný - viz. mui.com

**MUI Form elementy (inputy)**

   1) TextField
        = textový pole
        - 100ky variací a úprav
        - label zde zastává placeholder
        - zákl. varianty: outlined,
        - id je jako id :D
        - napojuje se na useState jako klasický input type="text"

   2) Slider
        = range input - ale good styling for free :DDD
        - opět hromada úprav
        - hodnota pomocí value a onChange as always...
        - 

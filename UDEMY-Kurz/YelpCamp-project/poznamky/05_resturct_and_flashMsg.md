**Reconstructing routů**

    = předěnání aby se používal router
        - přidám ./routes a do doho routy tak aby to bylo přehlednější
        
        - k funkcionalitě použiju ExpressJS router

        - toto provedu jak pro campgrounds tak pro reviews

    - když si některá id routy dám jako prefix a nejsou přímo v routě, tak se mi může stát že se mi neimportují do routy v souboru a tak budou chybět v req.params objektu;
      - pro fixup nastavím v routeru parametr {mergeParams: true} a je hotovo
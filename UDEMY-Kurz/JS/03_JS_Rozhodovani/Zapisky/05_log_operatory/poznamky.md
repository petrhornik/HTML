**logické operátky**
    = dovolují nám kombinování více výrazů do 1 if či else_if podmínky
        -> limitování opakovaného používání nestingu === cleaner code :DD

**AND**
    = oba výrazy na strannách AND musí být splňěny, aby byla splněná podmínka
    syntax: if(vyraz_1 && vyraz_2){}
    - viz.: 051 > app.js
    - např.: příkazy od rodičů než dostaneš volno
    - tip - pokud 1. výraz u AND je nepravdivý tak automaticky podmínka === nesplněna

**OR**
    = alespoň 1 z výruzů na strannách OR musí být pravdivý pro splněné podminky
    syntax: if(vyraz_1 || vyraz_2){}
    - viz.: 052 > app.js
    - vrací false jen pokud jsou oba výrazy false

**NOT**
    = podmínka bude pravdívá pokud výraz/výrazy budou false
    - např.: !(false && true) => true; !false => true; !(false || false) => true;
             !(false || true) => false; ...
    - viz.: 053 > app.js
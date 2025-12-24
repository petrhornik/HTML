**spread (...)**
  = syntaxe pomocí které můžeme itarable(array, string, ...) rozšířít v místech kde 0 nebo více argumentů (pro volání fce.) či elementů(array literáty) je očekáváno

    -> nebo object expression rozšířít na místech, kde se očekává 0 nebo více key-val párů

  - spread === ...
  - syntax: např.: Math.max(...naz_arr)

  - např.: rozdělí string na jednotlivé znaky, array na jednotlivé hodnoty, ...

**spread s arr. literáty**

  - použití např. pro snadné spojení více arrayů dohromady

  - např.: arr1 a arr2 -> const fullArr = [...arr1, ...arr2];
    -> potom můžu přidávat i vlastní nové hodnoty
      -> na začátek mezi spojované arr za ně (je to jedno)

**spread s objekty**

  - lze použít k úpravám objektu se zachováním hodnot či kombinovat key-val a hodnoty různých objektů do sebe

    -> pokud u objektů budou nějaké key-val schodné, hodnoty vždy budou přepsané na ty co obsahuje poslední spreadnutý objekt
      -> order matters!!!

tip - pokud spreaduji array do objektu tak indexy hodnot se použijí jako key-valy

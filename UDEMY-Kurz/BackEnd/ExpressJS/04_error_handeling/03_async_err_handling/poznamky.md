**Handling asynchronních chyb**

    = errory vracené asynchronními fcemi se musí passovat do next(), aby je express mohl zpracovat

    - místo: throw new AppError(); budu psát -> return next(new AppError());

    - pokud použiju next() syntax tak psát vždy return
      - aby se už neprováděl zbytek fce.

tip - od EpressJS ver. 5 už zde není next potřeba a můžu u jak sync tak async errorů psát normálně throw

    - pro mongoose related errory, např. nesplnění validace musím dát mongoose část kódu do try{} a error v catch dát opět do next()

tip2 - novej EpressJS už zvládá tyto errory samostatně i guess

    - good practise -> v async fcích používat vždy try,catch
      - při použití try,catch už můžu zase psát -> throw new AppError();
        - catch po tím si to odchytí
      - při tomto použítí počítám s error na každém řádku (uvnitř try)

**Funkce pro error handling async fcí**

    = celou async fci wrapnu jako callback do této fce.
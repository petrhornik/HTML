- by default jednotlivé objekty NEMAJÍ své vlastní kopie prototype objektů a metod, ale jen se na ně odkažují do prototype "obecných" objektů (String, Array, ...)

**Constructor Function**

    => místo vytvoření a odkazování se na objekt používám keyword this přímo ve fci. (odkazuju se přímo na funkci)

    -> #tip: fce. tohoto vypu by měly mít název s Upper 1. pásmenem

    -> pro zprovoznění fce/objektu musím přidát před volání fce. keyword new
    -> keyword new == vytvoří objekt z "this" hodnot

    -> actually zjednodušený syntax oproti Factory func. in my opinion...

    -> metody musím přidávat externě, aby se nevytvářely zvlášť pro každý objekt -> nazev_const_fce.prototype.naz_metody = function(){...};
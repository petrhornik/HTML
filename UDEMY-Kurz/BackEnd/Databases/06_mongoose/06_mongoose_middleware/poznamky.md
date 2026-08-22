**Mongoose middleware**

    => provádí se s funkcemi (před nebo po -> pres and post hooks) -> primárně asynchronními
        -> dobré pro tvorbu pluginů -> provýádí se před či po kusu kódu
        -> pracují na úrovni schémat

        -> opět se definuje na schéma

    - 2 typy: .pre -> provede se PŘED fcí.
              .post -> provede se PO fci.

    - mongoose jinak obsahuje 4 druhy middleware -> document middleware, model middleware, aggregate middleware, and query middleware
        
        - každý middleware má specifikované určité stavy/funkce na které může reagovat (před, po)
          - viz.: https://mongoosejs.com/docs/middleware.html#types-of-middleware

    - viz.: index.js

    - middleware má access k manipulovanému dokumentu stejně jako instance metoda přes keyword this
**Reviews model**

    = přidání nového mongoose modelu pro možnost psaní recenzí pro každá camp

    - následne přídání manipulace s reviews v rámci campgroundu
      - viz.: /BackEnd/ExpressJS/05

    - vytvořim schema, model, routy v app.js, propojím to pomocí N.M vazdy -> done :D

    - validace pomocí bootstrapu (custom validatedForm class) a JOI schémat

    - smazání review se provede pomocí routy kde bude jak id campu tak id review
      - s využitím $pull operátoru z mongo

    - updatnutí funkcionality smazání celého campu aby se smazaly i reviews

2 druhy mongoose middleware

  - document
      =>  
  - query
      =>
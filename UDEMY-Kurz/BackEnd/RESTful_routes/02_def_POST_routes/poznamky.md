**POST routes**

    - když už nastavím něco jinného např. GET request, tak POST nebude defaultně fungovat a express bude vracet chybu
      -> musím definovat samostatně (lze nastavit více druhů HTTP requestů na 1 URL)

**pasování request body při POST requestu**

    => získání dat z příchozího post requestu (z req objektu)
    - data jsou v req.body pokud je předtím rozparsuje middleware (app.use)


    - express.urlencoded({ extended: true }) -> umí rozparsovat form typu -> x-www-form-urlencoded

tip -> k testování funkcionality se hodí postman
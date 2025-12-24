**TVsearch**

    => procvičení API a axios

    e.preventDefault(); -> prevent defaultní funkcionality formu (submit -> obnovení stránky, ...)

    -> lze přiřadit několik parametrů a headerů pro axios když si je přidám za link do {} 
            -> či si {} přiřadím do proměnné -> 
            
            const config = {params: {q: input, date: "2014"}, headers: {type: "App"}}
            axios.get("link", config)
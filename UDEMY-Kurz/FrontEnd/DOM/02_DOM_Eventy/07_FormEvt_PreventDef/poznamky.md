**Formulář + JS**
    => lze upravit defaultní fungování formuláře
    - např.: vypnout přesměrování na jinou stránku atd.

    - form by default má sperifikovanou cestu v propu action, kam se odešlou data + tam budu přesměrován po submitu
    
    - použiju zde typ pro detekci: submit (odeslání formu)
    - bude se nám passovat formEvent obj.

    - input obj. atributy:
            value -> podnova se kterou se odesílá
            evt.preventDefautl(); -> zamezí odeslání a přesměrování na jinou stránku

    - také lze odkazovat na elementy ve formu pomocí naz_form_DOM_obj.elements
        -> nevím jak funguje, dohledat na MDN!

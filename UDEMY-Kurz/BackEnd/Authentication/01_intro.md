**Authenticace vs Autorizace**

   1) Aunthenticace (primary focus)

        = ověření kde konkrétní uživatel reálně je
        - username, password či biometrické ověření či i jiné
          - taky např. bezpečnostní otázky

   2) Autorizace
   
        = ověření co může uživatel reálně dělat
            - co může a co nemůže
              - určuju často pomocí rolí (user, admin, editor, owner, ...)

**Jak na ukládání hesel**

    - NIKDY neukládat hesla jako plaintext do DB
        - místo toho ukládat tzv. hash hesla - text hesla je zašifrovaný ve speciálním formátu co se nedá jednoduše reversovat
          - hash pro každé heslo je unikátní, ale vždy stejné velikosti
          - existuje více různých algoritmů
        - heslo ověřím tak, že to co zadá uživatel protáhnu tím samým algoritmem a hashe porovnám
          - pokud jsou identické -> správné heslo
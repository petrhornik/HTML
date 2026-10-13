**One to Few** (user.js)

    = zapsané přímo ve stejném dokumentu jako 1 bod objektu
        - vnořím data přímo do původního dokumentu

    - kdyz mám málo hodnot stejného typu, tak se výhodnější je přímo dát do původního dokumentu, než kvůli tomu tvořit kompletně nový model a schéma

    - každý objekt/dokument má vždy _id na které lze odkázat
      - i když právě vytvořím objekt/dokument uvnitř jinného tak bude mít své vlastní _id
        - viz.: tutorialDB přes mongosh

    - pokud nechci aby "vnořená schémata", vnořené dokumenty měli vlastní ID
      -> můžu tomu dát položku _id: {_id: false}
        - preventuje vygenerování ID a ubjektu dekumentu/objekut kde je specifikováno

**One to Many** (farm.js)

    = data jsou uložena separátně, ale reference na ně je ukládána dovnitř rodidě (dokumentu ke kterému položky náleží)

    - refenrence do parenta ukládám pomocí ObjectID("referencni_id")
    
    - podobně jako u předchozí relation si vytvořím položku v dokumentu kde bude array, ale teď už jen bude obsahovat ObjectID namísto celých datových objektů

    - položce do které chci umístit ony objectID tak musím specifikovat speciální datový typ z mongoose
      - viz.: farm.js>farmSchema
    - následně pomocí ref: určím ja jaký model bude ID odkazovat
      - takový foreign klíč z SQL

    - následně objekty do této položky normálně pushuju jako u předchozí relation, ale díky tomu spec. dat. typu se vezme jen ID a vznikne onen ObjectID

    # .populate v mongoose

        = pokud chci aby se mi společně s volaným dokumentem z DB zavolali do něj i ty přidružené pře ObjectID, tak musím přidat .populate callback
            - např.: Farm.findOne({finder_qry}).populate("naz_polozky_obsahujici_ObjeckID_Arr").then(callback na manipulaci se vším)

**One TO Bilions** (tweet.js)

    = pokud mám příliš mnoho "child" dokumentů, tak se reference na parenta ukládá v nich namísto v parentovi na ně

    - vlastně jako N:M SQL vazba (odkazovací ID u každé položky v jinné tabulce)

    - child dokument obsahuje ObjectID na parenta
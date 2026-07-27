**BSON**
    
    => rychlejší/kompaktnější verze JSON (BinaryJSON)

    - jedná se o JSON kde data která se převedou a uloží v bináru
      - je s nimi, ale manipuluju jako s klasickým JSON contentem

    - data vkládám, upravuju, vytahuju jako JSON
      - v DB jsou převedena u uložena v tzv. Binárním JSON formátu

    -viz.: https://www.mongodb.com/resources/languages/bson


    - např.:
                {"hello": "world"} →
                \x16\x00\x00\x00           // total document size
                \x02                       // 0x02 = type String
                hello\x00                  // field name
                \x06\x00\x00\x00world\x00  // field value
                \x00                       // 0x00 = type EOO ('end of object')
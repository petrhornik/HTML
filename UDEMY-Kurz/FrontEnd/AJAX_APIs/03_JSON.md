**JSON**
    => existuje pouze pro sdílení dat
    -> "Java Script Object Notation"
    -> píše se stejně jako array/objekt (u objektu má strukturu "name": value)
    
   1) data se default vrací jako string
        -> pro převodu na validní objekt -> JSON.parse(prom_s_daty)
    
   2) pro odeslíní dat převod na JSON (string)
        -> JSON.stringify(prom_obsahujici_objekt)


**XML**
    => používalo se dřív pro web API, dnes zde už moc ne
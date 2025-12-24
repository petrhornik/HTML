**Fetch**

    => náhrada za XHR, jednodušší a lepší
    -> FETCH = API pří mo integrované v JS
    -> podporuje promises
    -> v .then u fetche nikdy nebudou vidět data
        -> promise se splní hned jak se fetchi vrátí první headery response

   1) not the best
    -> pro "vytažení" obsahu responce lze použít .json() za objektem fce v .then mapř.: res.json(); apod.
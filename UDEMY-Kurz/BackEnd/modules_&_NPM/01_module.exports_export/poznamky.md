**module.exports** (CommonJS)

    => pro vyexportovaní fcí. z lokálních .js souborů pro využití jinde (lze přesně určit co chci/nechci exportovat)
        -> module.exports = pi, pro více použiju {} -> module.exports = {pi, square, add}

    -> pro import JS z jiného lokálního souboru musím se odkázat ./cesta/naz_souboru

    -> lze exportovat i něco uplně jinného než je v souboru -> module.exports = "HELLO" (exportuje se string a nic jinného)
        -> u export{} nelze!

    -> lze přiřazovat hned vše jako objekt NEBO postupně s dot notation

    -> module.exports === objekt do kterého se exportují/dají se z něj volat fce.


**export** (ESM)

    => samostatná fce. v JS pro export fcí. v lokálních souborech (novější z ESM)
        -> export {pi, square. add} <- {} používat vždy! i když exportuju jen 1 věc

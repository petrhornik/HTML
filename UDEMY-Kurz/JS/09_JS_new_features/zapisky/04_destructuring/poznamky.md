**Destructuring**
  = krátká a snadná symtaxe pro odčnenění jednotlivých hodnot z arrayů či properties z objektů do samostatných proměnných

  -> původní array či objekt NEMUTUJE

1) array

  syntax: const [naz_prom, naz_prom, ...naz_prom] = naz_arr;

  -> pokud chceme ze zbytku hodnot vytvořit nový array tak nakonec přidáme rest proměnnou
  -> do [] specifikujeme názvy proměnných ke kterým se dle pořadí přiřazují jednotlivé hodnoty z arraye

2) objekt

  syntax: const {key-val: naz_prom, key-val, ...} = naz_obj;

  -> název proměnné je stejný jako key-val v objektu
    ->do {} zapisuju key-valy (názvy key-valů === názvy vytvořených proměnných)

  -> název vytvořené proměnné lze změnit pomocí vyplnění názvu za : za key-val
  -> pokud se budu odkazovat na neexistující key-val, tak se proměnná vytvoří s hodnotou undefined

3) params
  = pro získání konkrétních hodnot z passovaného objektu

  -> {} s key-valy dáme přímo do () u definování fce.
  -> k jednotlivým key-valům se dá nastavit default value

podobná funkcionalita jako v pythonu -> time.sleep()

**setTimeout**
    = pro čekání/zpoždění spuštění navazujícího kódu
    
    - pro funkčnost potřebuje callback fci. a čas v ms
    - syntax: setTimeout(() => {code}, time_in_ms);

**setInterval**
    = bude opakovaně spouštět obsažený kód vždy po uplynutí urč času v ms

    - syntax: stejné jako u setTimeout

**cleanInterval**
    = pro zastavené setInterval
    - každý setInterval má své id
      -> pokud do () u cleanInterval přidáme id tak se onen setInterval zastaví

**Jak vytvářet/designovat React komponenty**
    = jak správně strukturovat aplikace (state, prop, passování, atd...)
        - jak vše rozložit do jednotlivých komponentů

   # 1) často používané funkce
        = dáváme do samostatného většinou klasického .js souboru
            -> vytvořené fce. exportujeme -> export {fce1, fce2, fce3, ...}
            -> do .jsx souborů si je voláme pomocí klasického import{fce} from "./soubor"

   # 2) rozdělení na menší části
        = velké komponenty rozsekat na menší části, ze kterých se na konci složí celková aplikace
        - komponenta může být využívaná pro VÍCE aplikací (ne jen u jedné)
            - > např. komponenta tlačítka, kostky, ...
            - > příklad => aplikace kasína a komponenta kostky

   # 3) hierarchie komponentu
        = rozčlenit si aplikaci tak, aby komponenty a jejich hierarchie dávala smysl
        - musíme se zamyslet kam dát state
            - > NELZE PASSOVAT STATE DO NAZŘAZENÉ KOMPONENTY
                - > např.: state z dice nelze passnout do LuckyN či App.jsx apod.
            -> např.: 
            
            App.jsx
                V   V   V
            LuckyN(komponent hry, obsahuje logiku) <- zde bude state (v tomto případě)
                V   V   V
            dice(skupina kostek) <- určuje počet render. kostek
                V   V   V
            die(komponent 1 kostky) <-použe renderuje hodnotu z arraye v state

        - používat state vždy v co nejvýše postavené komponentě, ale tak aby to dávalo mysl
            - > např.: logiku hry nebudu umisťovat do App.jsx protože jsem kromě hry mohu importovat i další komponenty + mohu logiku hry použít i pro jinné komponenty apod.

   # 4) 2 druhy komponent

        - PREZENTAČNÍ = neobsahují state! -> používají se hlavně pro vzhled/UI
        - LOGÍCKÉ = obsahuje state nebo s ním spjatou logiku
                      - > neobsahuje specifický vzhled

        - v našem případě:
          
          - App, Dice, Die - prezentační
          - LuckyN - logické

   # 5) passování state jako prop pro nějaký komponent
        = state proměnná může být passnuta jako prop pro komponenty (ať už se jedná o hodnotu, array, objekt, ...)
            ->hodnota state se může passovat iskrze více komponent
                -> zde: LuckyGame>Dice>Die(vypisuje value hodnotu ze state arraye)

   # 6) passování funkcí jako prop pro nějaký komponent
        = funkce se dají passovat jako propy pro komponenty
        - viz.: LuckyGame.jsx
        - funkci si vytvoříme mimo exportovaný komponent a passujeme ke komponentu podřazenému
        - funkci si to propu voláme bez () !!!!
        - díky tomuto můžeme použít pro LuckyGame více logik pro výhru atd.
        - pokud si zavolanou fci definuji např. v onClick={} <- definuji přímo sem a NEzavírám do dalších {} !!!!!!!!!!!!!
            - viz Button.jsx

   # 7) passování funkcí co updatují state prom.
        = např. samostatný reusable komponent tlačítka
        - komponenta se dá využít pro více funkčností/pro různé jiné komponenty
        - komponent vždy importovat před voláním!
        - do komponenty/fce updatující state si můžu passovat jiné prom či jiné fce.

   # !!!IMPORTANT!!! - Datový tok v Reactu
        1) parent komponenta definuje funkci
        2) fce. je passnuta jako prop do child komponentu
        3) child komponenta si zavolá fci z propu
        4) parent funkce je zavolána -> obvykle se změní/vytvoří nový state
        5) parent komponent je re-renderován společně s jeho child komponenty

   # CV - procvičování passování funkcí
        - viz.: GameBoard folder
  

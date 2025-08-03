**Internet**
            - pro komunikaci se používá směrování(routing) - spec. zařízení v síti co řídí komunikaci mezi nějakým počtem zařízení k nim připojených(routery a tvorba sítí)
                                                        - síťe mužeme spojovat vzájemným propojením routerů
                                                        - směruje se pomocí IP za použití TCP či UDP
            = ohromná síť složená z mnoha menších sítí, ve kterých je mnoho vzájemně propojených a komunikujících zařízení(dnes v podstatě cokoli chytrého)
                    - přenáší se informace z bodu A do bodu B + zde samozřejmě můžeme sdílet web stránky

**WEB (World Wide Web - www)** 
                                = informační systém ve kterém mlžeme sdílet dokumenty a různé prostředky skrze internet
                                        - prostředky a zdroje identifikovány pomocí URL(uniform resource locator - adresy, které na něco odkazují)
                                        - prohlížeč umí požádat a zobrazit web. prostředky
                                        - přenos těchto informací(prostředky, dokumenty,...) probíhá pomocí protokolu HTTP
                                                - pokud odkazuju na nějaké URL nebo obnovím stránku, posílám požadavek na příslušný webový server(ten jehož doména je obsažena v URL) o zpětné zaslání onoho obsahu, na který ona URL odkazuje a prohlížeč následně obsah zobrazí
                                                - pokud URL odkazuje na neexistující prostředky tak server vrátí chybu

**Požadavky/Odpovědi**  
                        = na straně klienta se vyšle požadavek na příslušný server -> server zpátky pošle kód(instrukce) daného obsahu, na který odkazujeme -> následně web. prohlížeč klienta si onu stránku dle přijatého kódu sám sestaví a následně zobrazí(vyrenderuje)
                        tip - v prohlížeči lze zobrazit zdrojový kód(ony instrukce) jakékoli stránky
                        - přijaté instukce se zkládají hlavně z HTML, CSS a JS

                        např.: https://www.reddit.com/r/linuxmemes/

                                https:// -> používá se šifrovaný HTTP protokol pro komunikaci
                                www.reddit.com -> doména příslušného serveru na který odkazujeme
                                /r/linuxmemes/ -> obsah serveru na který odkazujeme, pošlou se zpět instrukce pro sestavení tohoto obsahu (subreddit linuxmemes)

**Front-End x Back-End**
                        = termíny definujicí 2 hlavní části web. stráky

                        Front-End = to co se děje v prohlížeči - vidí interaguje uživatel - vzhled, interakce, ... (HTML, CSS, JS) např.: jídelna
                                    URL požadavek -> stránka se zobrazí (po příjmutí instrukcí)
                        
                        Back-End = to co se děje mimo prohlížeč - na web. serveru od příjmutí žádosti až po finální odeslání kódu zpět klientovi - ověření, databáze,... (Python, C, Java) např.: kuchyň v jídelně
                                    server dostane požadavek -> server rozpozná co chceme(vyhledá v databázi) -> kdo o to žádal(jestli má klient práva k zobrazení + jestli je přihlášen nějaký uživatel s urč. právy) -> reklamy ano-většinou nebo ne (na bázi online identity klienta + toho co hledá)-> zpětně zašle instrukce pro sestavení klientovi(HTML,CSS,JS)

**HTML/CSS/JS**
                = web. prohlížeč umí používat jen tyto prostředky

                HTML = vytváří a popisuje co za věci jsou na stránce (kdo, co?)
                CSS = vzhledové úpravy HTML prostředků (jaký, jak vypadá?)
                JS = nějak interaguje s jednotlivými věcmi na stránce (co dělá?)

                např.: zelené tlačítko s černým okrajem odhalilo schovaný text
                        
                        jaký, jak vypadá? -> zelené, s černým okrajem -> CSS -> bez CSS tlačítko nebude vypadat tak jak chceme
                        kdo, co? -> tlačítko -> HTML -> bez HTML tlačítko nebude existovat
                        co dělá? -> odhalilo schovaný text -> JS -> bez JS tlačítko nebude nic dělat

**Užitečné navíc**

                WIN + N -> nový textový soubor bez formátu ve VSCode
                W
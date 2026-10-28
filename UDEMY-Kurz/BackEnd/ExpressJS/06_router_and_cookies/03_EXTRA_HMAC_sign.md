**Podepisování integrity pomocí HMAC**

    = pro detekci originality položky či jestli byla někde "neautorizovaně" změněna mi zajišťuje právě integrita apodepisování těchto položek

    - vezme původní data a za ně přidá zašifrovaný mnou předem specifikovaný secret string
      - má 2 části -> data a signiture

    - u podepsaných dat se vždy checkuje celý obsah a pokud někde něco nesedí, tak můžu s 99% přesností určit, že data byla někdě změněna

    HMAC - používá se právě pro to ověření integrity -> nejdříve se vytvoří z té původní verze a po příchodu nového requestu se provede vytvoření dalšího HMAC a pokud jsou shodné tak je vše OK

    HMAC generator pro ukázku -> https://www.devglan.com/online-tools/hmac-sha256-online

    
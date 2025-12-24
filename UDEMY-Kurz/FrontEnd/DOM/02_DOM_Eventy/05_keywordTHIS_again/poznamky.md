**DOM + keyword this**
    => pro změnu konkrétního prvku pomocí fce. definované mimo event odkazující na prvek
    => když chci např. použít fci. měnící styl pro více eventů zároveň
    
    - pokud chci fci. upravující paramentry konkrétního DOM obj. použít 
        pro více eventů použiju this keyword pro univerzální sperifikaci, 
        která odkazuje vždy na onen objekt do kterého je zavolána
    
    - při používání keywordu tihs NIKDY ALE NIKDY nepoužívat arrow fce.

    - za this se dosadí prom. DOM obj. do kterého je taková fce. zavolána
    
    - poté už jen dosazuji název fce. bez () do listeneru
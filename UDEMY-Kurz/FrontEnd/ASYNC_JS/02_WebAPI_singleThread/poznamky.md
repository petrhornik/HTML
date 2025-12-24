==> JS je single thread jazyk -> umí provádět max. 1 řádek kódu v 1 konkrétní chvíli
        -> není schopen multitaskingu (dělat více věcí(řádků) najednout)

        -> pro obejití tohoto lze použít např. setTimeout
                
                -> akce v setTimeout a podobně se NEPROVÁDÍ pomocí JS, ale pomocí prohlížeče(WebAPI)
                        
                        -> prohlížeč psaný v C#, JAVA, ... je této multitasking funkcionality schopen

**WebAPI - pro hlubší interakci JS a prohlížeče <- z pohledu kódu**
    - JS stack rozpozná WebAPI fce. a předá je na zpracování prohlížeči
      -> když browser dokončí fci. tak se vrácí do staku jako callback 
    - kromě čekání jsou schopny také requestů
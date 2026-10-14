**Sada good-practises/rules přímo od MongoDB**

    = mongo mi dává příliš velký freedom -> dost rychle můžu věci dělat tak, že budou zbytečně bloated (EW)

# Denormalization

    = můžu duplikovat data, ale nedělat to zbytečně
        - pokud budu něco používat opakovaně tak to buď includnu přímo v tom modelu nebo na to budu nějak odkazovat pomocí ObjectID

# 6 core mongo pravidel

    - zde je všechno k tomuto tématu
      - https://www.mongodb.com/company/blog/mongodb/6-rules-of-thumb-for-mongodb-schema-design

    - např. musím si rozlišit co u konkrétního dokumentu uchovám přímo v něm a potom to co budu muset ukládat separátně 
      - a zpětně na to nějak odkazovat

    - když budu u všeho na co odkazuju potřebovat často renderovat třeba názvy
      - můžu si tato data naduplikovat ať potom nemusím např. u 100 položek volat provádět populate a zbytečně na FE tahad velké knožství dat jen kůlu renderování mapř.: názvů a datumů vytvoření


!!!  Neexistují žádné pevnéí limity ani pravidla, ALE hodí se dodržet základ nebo mi to někdo omlátí o hlavu :D
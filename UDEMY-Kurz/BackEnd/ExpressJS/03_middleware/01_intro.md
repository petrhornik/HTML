**MIDDLEWARE**

    => jedná se o funkci/e která se provede v nějakém bodě životnosti requestu/response

    - má po celou dobu přístup do req,res
    - sám middleware může zastavit response a zaslat svůj -> např. error při autentizaci, atd.

    - více middleware může navazovat na sebe -> díky next()
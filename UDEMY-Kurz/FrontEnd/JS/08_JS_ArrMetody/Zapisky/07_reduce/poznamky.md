**Reduce**
    = spustí reduce fci. na každé položce arraye, výsledkem je 1 hodnota
        -> sjednotí celý array do 1 hodnoty

    1) číselný array

        - syntax: naz_arr.reduce((accumulator, currVal) => {
                        return accumulator + currVal;
                     }, starting_val)

        accumulator = hodnota 1 položky v array + další hodnoty které už se nějak sjednotili s tou 1 hodnotou

        currVal = hodnota položky se kterou momentálně .reduce pracuje

        starting_val = NEPOVINNÉ -> vlastní počáteční hodnota (.reduce začne od 1. položky v arrayi)

        + je jen způsob jak hodnoty sjednocovat

        - pomocí tohoto lze nahradít např. sčítací for loopy apod.

    - pro accumulator lze specifikovat vlastní počáteční hodnotu
      -> za expression přidám , a za ní onu hodnotu
      -> viz.: app.js
      -> u expressions se {} přidám , s hodnotou za } (koncovou)

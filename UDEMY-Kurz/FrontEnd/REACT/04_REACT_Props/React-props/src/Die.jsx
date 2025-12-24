/* mění se počet stran kostky dle passnute hodnoty v pocetStran */

export default function Die({ pocetStran=6 }){  /* 6 bude def. hodnota pokud nebude u propu specifikováno jinak */
    console.log(pocetStran)
    const kostka_hod = Math.floor(Math.random() * pocetStran + 1); /* +1 protože počítání od 0 */
    return <p>Hod {pocetStran} strannou konstkou: {kostka_hod}</p>
}
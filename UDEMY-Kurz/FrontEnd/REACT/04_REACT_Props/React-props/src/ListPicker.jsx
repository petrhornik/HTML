/* fce. pro výběr náhodné položky z arraye */

export default function ListPicker({hodnoty}){
    const nahodnyIndex = Math.floor(Math.random() * hodnoty.length);
    const nahodnaPolozka = hodnoty[nahodnyIndex];
    return(
        <div>
            <p>List hodnot: {hodnoty}</p>
            <p>Náhodná položka z arraye je: {nahodnaPolozka}</p>
        </div>
    )
}
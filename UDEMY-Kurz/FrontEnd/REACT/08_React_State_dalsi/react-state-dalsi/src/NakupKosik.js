// ukázka příkladů updatovaní obsahu arraye v Reactu

const polozkyListu = [
    {id: 1, name: "HDMI kabel", cena: 450},
    {id: 2, name: "USB disk", cena: 250},
    {id: 3, name: "Apple dongle", cena: 1099},
];

// 1) přidání hodnoty do arraye

[...polozkyListu, {id: 4, name: "Smasnug dongle", cena: 899}];

// 2) mazání hodnoty z arraye

    polozkyListu.filter(polozka => polozka.id != 3);

// 3) úprava všech položek/hodnot v arrayi

polozkyListu.map(polozka => {return {...polozka, name: polozka.name.toLowerCase()};})

// 4) úprava konkrétního elementu v arrayi

    polozkyListu.map(
        polozka => {
            if (polozka.id == 3){
             return {...polozka, cena: 564};   
            }else{
                return polozka;
            }
        }
    )


// 5) třídění/řazení položek v arrayi -> .sort/.reverse

const arr = [1, 2, 3, 27, 4, 5];

const tridenyArr = [...arr].sort(); // použijeme spread pro vytvoření nov. příděného arr

console.log(tridenyArr)
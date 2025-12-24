// úpravy objektů

const znamkyZeZkousek = {Adam: 96, Matyas: 78};

znamkyZeZkousek.Matyas = 79; //úprava již existující hodnoty v obj

console.log(znamkyZeZkousek);

znamkyZeZkousek.Adam = "A";
znamkyZeZkousek["Matyas"] = "C+";

//přidání nové hodnoty

znamkyZeZkousek.Tomas = "B+";
znamkyZeZkousek["Jamal"] = "D-";

console.log(znamkyZeZkousek);

//array a objekt combo

const komentaryNaYT = [

    {user: "Tina", msg: "Hi cool video!", likes: 67},
    {user: "Alex", msg: "BOOOOOOOOOOOOO!", likes: -56},
    {user: "xxJimYT2014", msg: "Sub to me!!", likes: 0},
    {user: ["hacked", "hacked"]},

];

let num = 2;

console.log(`You!'ve received message from ${komentaryNaYT[num].user} stating: ${komentaryNaYT[num].msg}, it received ${komentaryNaYT[num].likes} likes so far!`);
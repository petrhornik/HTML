// returning func. (fce. ve fci.)

function vyrobceFunkci(){
    const random = Math.random();
    console.log(random);
    if(random > 0.5){
        return function(){ // vrací se toto
                console.log("NICE, vylosoval jsi dobře!")
            }  
    }else{ // a toto
        return function(){
            alert("DELETING... C:/Windows/System32")
        }
    }
};

const loterie = vyrobceFunkci(); // výstupní fci napojím na nějakou proměnnou (v podstatě functionExpression)
loterie(); //spuštění vybrané fce...

// # 2 - builder funkce -> sestavování funkcí pomocí funkce WOOOOW

// function naleziciCislo(num){
//     return num >= 50 && num <= 100 //funkce vracející boolean dle (ne)pravdy
// }

// function naleziciCislo2(num){
//     return num >= 0 && num <= 10 //hardcoding každé fce. FUJ!!!
// }

// const bool = naleziciCislo(87);
// console.log(bool);

function nalezCisBuilder(min, max){ //builder fce. TIME 😎 - schopna tvořít jiné fce. (většinou stejného účelu s různými hodnotami)
    return function(num){
        return num >= min && num <= max;
    };
}

const CreatedFunc = nalezCisBuilder(30, 150); //můžu vytvořít kolik fcí chci bez samostatné deklarace
const bool = CreatedFunc(50);
console.log(bool);



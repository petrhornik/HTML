// returning func.

function vyrobceFunkci(){
    const random = Math.random();
    console.log(random);
    if(random > 0.5){
        return function(){
                console.log("NICE, vylosoval jsi dobře!")
            }  
    }else{
        return function(){
            alert("DELETING... C:/Windows/System32")
        }
    }
};

const loterie = vyrobceFunkci(); // výstupní fci napojím na nějakou proměnnou (v podstatě functionExpression)
loterie(); //spuštění vybrané fce...

// # 2 - builder funkce -> sestavování funkcí pomocí funkce WOOOOW

function naleziciCislo(num){
    return num >= 50 && num <= 100 //funkce vracející boolean dle (ne)pravdy
}

const bool = naleziciCislo(87);
console.log(bool);
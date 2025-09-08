// higher order fce.

let greet = function(){ //func. expression pro passování
    console.log("HELLO!");
};

greet();

function zavolejDvakrat(func){
    func(); //execute jako fce.
    func();
};

zavolejDvakrat(greet); // () jsou už specifikovány v higher fci.


console.log("\n")

// #2

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
};

rollDie();

zavolejDvakrat(rollDie); // passovaná fce se passuje jen název bez () -> se () by se spustíla ihned a v argumentu by byl její output


console.log("\n")

// #3

function run10times(f){
    for(let i = 0; i < 10; i++){
        f();
    };
};

run10times(rollDie);
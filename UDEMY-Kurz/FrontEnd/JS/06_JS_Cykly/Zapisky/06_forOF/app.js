// ukázka for...of

const Array = ["unixporn", "ubuntu", "fedora", "uniontechUOS"];

// #1 basic for

for (let i = 0; i < Array.length; i++){
    console.log(`Navštiv reddit.com/r/${Array[i]}`);
};

console.log("\n")

// #2 for of

for(item of Array){ //syntax připomína PYTHON...change my mind!
    console.log(`Navštiv reddit.com/r/${item}`);  //that's in XD
};

console.log("\n")

// další ukázka iratable

const text = "hello world!"

for(char of text){
    console.log(char);
};

//
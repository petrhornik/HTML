
// fce generuje náhodnou hodnotu 1-6 (hod kostkou)

function d6(){
    return Math.floor(Math.random() * 6) + 1;
}

//vytvoří array s poštem "hodů kostkou" pro n (n = počet kostek se kterými se hází)

function getRolls(n){
    return Array.from({length: n}, () => d6());
}

// zisk součtu všech passnutých položek (např. celého arraye)

function sum(nums){
    return nums.reduce((prev, cur) => prev + cur, 0);
}



export {d6, getRolls, sum};
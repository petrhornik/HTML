const ArrawNew = [1, 2, 3];
console.log(ArrawNew.__proto__); //výpis metod existujícího arraye pomocí prototype podobjektu

console.log(Array.prototype); //výpis metod pomocí Array.prototype (obecný pro všechny arraye)
console.log(String.prototype); //výpis metod pomocí String.prototype (obecný pro všechny stringy)

//přidání vlastní metody do prototype podobjektu

String.prototype.grumpus = () =>{
    alert("VYPADNI Z MOJÍ STRÁNKY!");
};

String.prototype.yell = function() {
    alert(`${this.toUpperCase()} YEEEEEEEEE!!!!!!!!`); // odkazuje na hodnotu obsaženou v objektu proměnné (string, array, ...)
}

const str = "Ahoj, jak se máš?";
str.grumpus(); //volání vlastní metody přidané do String.prototype
str.yell(); //volání vlastní metody přidané do String.prototype


Array.prototype.pop = function() {
    return "Sorry tuto funkci tu nechci!!!"
};
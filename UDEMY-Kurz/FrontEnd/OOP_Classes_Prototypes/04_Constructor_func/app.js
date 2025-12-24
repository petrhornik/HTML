function Color(r,g,b){ //nejbližší odkazovatelný objekt je windows (hlavní) -> díky tomu nemají všechny objekty vytvořené s Color své vlastní metody, ale odkazují se na ně
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function(){
    return `rgb(${this.r},${this.g},${this.b})`;     // vytvoří přímo do hlavního objektu pro všechny "Color" objekty (veškeré vytvořené objekty se budou na metodu jen odkazovat)
}

Color.prototype.hex = function(){
    return '#' + ((1<<24) + (this.r<<16) + (this.g<<8) + this.b).toString(16).slice(1);
}

Color.prototype.rgba = function(a){
    return `rgba(${this.r},${this.g},${this.b}, ${a})`;  
}

console.log(new Color(20,30,10).rgb());

const newColor = new Color(123,231,111);

console.log(new Color(20,30,10).hex());
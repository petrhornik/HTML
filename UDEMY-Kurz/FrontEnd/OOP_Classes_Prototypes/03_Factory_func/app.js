function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
  return `rgb(${r},${g},${b})`;
}

console.log(hex(255, 100, 255));

// #ff64ff

function makeColor(r, g, b) {
  const color = {}; //vytvoření objektu + přidání hodnot
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    return `rgb(${this.r}, ${this.g}, ${this.b})`; //odkaz na hodnoty přímo v objektu
  };
  color.hex = function () {
    return (
      "#" +
      ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b)
        .toString(16)
        .slice(1)
    );
  };
  return color; //vrácení objektu
}

const firstColorObject = makeColor(255, 121, 243); //celý vytvořený objekt se uloží do proměnné
const firstColorRGB = makeColor(255, 121, 243).rgb(); //uloží se to co vrátí provedená metoda (rgb formát)
const firstColorHEX = makeColor(255, 121, 243).hex();

console.log(
  JSON.stringify(firstColorObject) +
    "\n" +
    firstColorRGB +
    "\n" +
    firstColorHEX,
);

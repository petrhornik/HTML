class Color {
  constructor(r, g, b, colorName = "notSpecified") {
    //konstrunce samotného objektu
    this.r = r;
    this.g = g;
    this.b = b;
    this.colorName = colorName;
    this.calcHSL(); //ihned provede funkci
  }

  innerRGB() {
    return `${this.r},${this.g},${this.b}`; //vytvoření metody v prototype objectu Color ==> EZ
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  hex() {
    return (
      "#" +
      ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b)
        .toString(16)
        .slice(1)
    );
  }

  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  hsl() {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  }

  oppositeHSLcolor() {
    const newHue = (this.h + 180) % 360; // % 360 -> zajišťuje že se nikdy nepřekročí hodnota 360 a pokud ano tak se začno od nuly s tím co zbylo po dovršení 360
    return `hsl(${newHue}, ${this.s}%, ${this.l}%)`;
  }

  fullSaturationHSL() {
    const newSaturation = 100;
    return `hsl(${this.h}, ${newSaturation}%, ${this.l}%)`;
  }

  calcHSL() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2;
    else
      // Blue is max
      h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
  }
}

const c1 = new Color(220, 100, 231, "seaBlue");
const c2 = new Color(111, 243, 255, "IDK");

console.log(c1.rgb() + "\n" + c1.hex());

console.log(c2.rgb() + "\n" + c2.hex());

console.log(c1);

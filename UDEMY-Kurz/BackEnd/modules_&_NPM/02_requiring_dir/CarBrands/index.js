const citroen = require("./citroen");
const mercedes = require("./mercedes");
const skoda = require("./skoda");
const xiaomi = require("./xiaomi");

const availableCars = [citroen, mercedes, skoda, xiaomi]; // spojení všech souborů do stringu

module.exports = availableCars;
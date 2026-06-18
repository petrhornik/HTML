const add = (x, y) => x + y;

const pi = 3.14159;

const square = (x) => x * x;

// module.exports.square = (x) => x * x; // WHYYYY???

//CommonJS

// module.exports = {pi, square, add}; // starý commonJS standard, používat export{} z ESM!!! (nechám to tady because of kurz :D)

// postupné přidávání

/* module.exports.add = add;
module.exports.square = square;
module.exports.pi = pi; */

// export jako objekt

/* const math = {
    add: add,
    pi: pi,
    square: square,
};

module.exports = math; */ // WHYYYYYY?!!!

// zkrácená verze pro CommonJS

exports.square = square;
exports.pi = pi;

// ESM varianta
/* export { add, pi, square };
 */

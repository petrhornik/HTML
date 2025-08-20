//Remove the first element, "The Moon", from the planets array.  
// The moon is not a planet!
//Add in "Saturn" at the very end of the planets array
//Add "Mercury" as the first element in the planets array.

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

planets.shift();
planets.unshift("Mercury");
planets.push("Saturn");
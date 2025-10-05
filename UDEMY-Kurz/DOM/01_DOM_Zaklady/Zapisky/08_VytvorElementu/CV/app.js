// Without touching index.html, please use JavaScript to create exactly 100
// new button elements! Add each new button inside the container element
// provided in index.html. Here are the steps:
// Create exactly 100 new button elements
// Each button must have some text inside of it (it doesn't matter what)
// Each button must be appended inside the container div.

// WRITE YOUR CODE IN HERE:

const div = document.querySelector("#container");

for(let i = 0; i < 100; i++){
    const button = document.createElement("button");
    button.innerText = "Hey!";
    div.append(button);
};
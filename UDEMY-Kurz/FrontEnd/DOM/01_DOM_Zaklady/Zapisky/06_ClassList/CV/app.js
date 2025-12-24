// WRITE YOUR CODE IN HERE:

const zvyraznit = document.querySelectorAll("li");

for(let i = 0; i < zvyraznit.length; i++){
    zvyraznit[i].classList.toggle("highlight");
}
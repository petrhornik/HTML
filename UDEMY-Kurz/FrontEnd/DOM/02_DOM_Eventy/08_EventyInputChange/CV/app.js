const text = document.querySelector("#username");
const headerText = document.querySelector("h1");

text.addEventListener("input", (evt) => {
    if (evt.target.value == ""){
        headerText.innerText = "Enter Your Username";
    }else{
        headerText.innerText = "Welcome, " + evt.target.value;
    }
})
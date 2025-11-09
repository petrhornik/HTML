const form = document.querySelector("#tweetForm");
const uname = document.querySelector("input");
const tweet = document.querySelectorAll("input")[1]; // výběr dle pořadí od vrchu stránky pomocí indexů (podobné arrayům)
const tweetListing = document.querySelector("#tweetList")

const lis = document.querySelectorAll("li");

for (let li of lis){
    li.addEventListener("click", () => {
        li.remove();
    })
}


form.addEventListener("submit", (evt) => { //event co se provede při odeslání formuláře
    evt.preventDefault(); // vyblokuje přesměrování (default funkcionalitu formu)
    
    //alert(`${form.elements.username.value} - ${tweet.value}`); // na hodnotu se dá odkazovat přímo skrze form, nikoli externím voláním

    const newTweet = document.createElement("li");
    const boldTag = document.createElement("b");
    boldTag.append(uname.value)
    newTweet.append(boldTag)
    newTweet.append(`- ${tweet.value}`)
    tweetListing.append(newTweet)
    uname.value="";
    tweet.value="";
})

tweetListing.addEventListener("click", (evt) => {
    evt.target.nodeName === "LI" && evt.target.remove();
})
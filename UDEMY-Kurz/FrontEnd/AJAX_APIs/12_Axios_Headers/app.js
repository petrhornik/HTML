const jokeList = document.querySelector("#jokes")
const button = document.querySelector("button")

const getDadJoke = async () => {
    try{
        const config = {headers: {Accept: "application/json"}};
        const res = await axios.get("https://icanhazdadjokse.com/", config);
        return res.data.joke
    } catch(e){
        return "Well well well, no jokes for you my guy :("
    }
};

const addNewJoke = async () => {
    const data = await getDadJoke();
    const newLI = document.createElement("LI")
    newLI.append(data)
    jokeList.append(newLI)
};


button.addEventListener("click", addNewJoke)
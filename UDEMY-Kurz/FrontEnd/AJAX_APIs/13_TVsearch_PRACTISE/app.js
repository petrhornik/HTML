const form = document.querySelector("#searchForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Odesláno")
    const searchInput = (form.elements.query.value); //získání hodnoty z inputu (form objekt moment!)
    console.log("Vyhledáváte: ", searchInput)
    const config = {params: {q: searchInput}, headers: {}} //objekt s parametry a headery pro axios.get -> (jakákoli konfigurace requestu)
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config) //axios.get vrací promise, proto await
    for (let element of res.data) { //veškerá data z response
        let imageUrl = element.show.image.medium;
        const img = document.createElement("IMG");
        img.src = imageUrl;
        document.body.append(img)  
    }
})

//res.data -> odkazuje na jednotlivé objekty ve vraceném arrayi z API (res.data[0] <- první objekt, ...)
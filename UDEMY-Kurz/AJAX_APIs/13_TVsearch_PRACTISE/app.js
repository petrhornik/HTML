const form = document.querySelector("#searchForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Odesláno")
    const searchInput = (form.elements.query.value);
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
    const img = document.createElement("IMG");
    img.src = res.data[0].show.image.medium
    document.body.append(img)
})
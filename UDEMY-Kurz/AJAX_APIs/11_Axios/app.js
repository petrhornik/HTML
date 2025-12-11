// 1. zp

axios.get("https://swapi.dev/api/people/1/")
.then(res => {
    console.log("fetched data:", res)
    console.log(res.data)
}).catch(e => {
    console.log("UHH OH", e)
})

// 2. zp - async fce.

const loadStarWarchChars = async (id) => {
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data)
        const res2 = await axios.get(`https://swapi.dev/api/people/${id + 1}/`);
        console.log(res2.data)
    }catch (err){
        console.log("UHH OH...you got:", err)
    }
};

loadStarWarchChars(4);

// easier than fetch...
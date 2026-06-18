// 1. zp -> ok but not enough

fetch("https://swapi.info/api/people/1/")
  .then((res) => {
    console.log("resolved 1. request", res); //logika 1. requestu
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch("https://swapi.info/api/people/2/"); // vrací se další fetch
  })
  .then((res) => {
    console.log("resolved 2. request", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("UH OH", err);
  });

// 2. zp - async fce

const loadStarWarchChars = async () => {
  try {
    const res = await fetch("https://swapi.info/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.info/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (err) {
    console.log("UHH OH...you got:", err);
  }
};

loadStarWarchChars();

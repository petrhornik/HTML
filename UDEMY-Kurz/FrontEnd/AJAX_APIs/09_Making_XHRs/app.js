// DO NOT USE - DNES UŽ ZBYTEČNÉ!!

const request = new XMLHttpRequest();

request.onload = function() {
    console.log('Data fetched successfully:');
    console.log(JSON.parse(this.responseText).name); // parsing JSON odpovědi
}

request.onerror = function() {
    console.log('An error occurred fetching data.');
}

request.open('GET', 'https://swapi.dev/api/people/1/');
request.send();

// NO FUJ!!!!


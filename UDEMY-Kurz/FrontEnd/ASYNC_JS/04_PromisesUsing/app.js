// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => { //simulování timeoutu pri fetchování dat
    const delay = Math.floor(Math.random() * 4500) + 500; //simulace trvání fetche
    setTimeout(() => {
        if (delay > 4000) { //pokud fetching trvá moc dlouho
            failure('Connection Timeout :(')
        } else { //fetch se stihle v čas intervalu 4000ms
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// CALLBACK ukázka - CALLBACK HELL (not gut)

fakeRequestCallback("books.com", //kromě URL můžu passnout 2 fce (jako callbacky) -> co se provedou pokud OK či NE
    (response) => {    //u fce v fakeRequestCallback s k oběma fcím importují hodnoty do (), lze si je passnout pod jakýmkoli názvem
    console.log(response)
    fakeRequestCallback("books.com/pages", //pokud chci, aby requesty probíhaly po sobě tak musím nestovat, jinak to nejde
        (response) => {    
            console.log(response)
            fakeRequestCallback("books.com/quotes", 
                (response) => {    
                    console.log(response)
                }, (err) => {
                    console.log(err)
                }
            )
        }, (err) => {
            console.log(err)
        }
    )
}, (err) => {
    console.log(err)
})

// PROMISES ukázka - OLD WAY

const myDomainReq = fakeRequestPromise("horpet.eu");

myDomainReq.then(() => {
    console.log("Doména funguje...ti co ví...")
    fakeRequestPromise("horpet.eu/webmin")
        .then(() => {
            console.log("stránka funguje")
            fakeRequestPromise("horpet.eu/webmin")
                .then(() => {
                    console.log("stránka2 funguje")
                }).catch(() => {
                    console.log("WELL...site2 not working")
                })
        }).catch(() => {
            console.log("WELL...site not working")
        })
    }).catch(() => {
        console.log("NOOOO OUR DOMAIN...IT'S BROKEN")
});

// PROMISES ukázka - NEW WAY

fakeRequestPromise("anotherDomain.com")
    .then((data) =>{
        console.log("WORKING NEW!!!");
        console.log(data);
        return fakeRequestPromise("another2Domain.com")
    })
    .then((data) => {   // není nested! vždy se vrací (returnuje) na stejnou úroveř
        console.log("WORKING NEW2!!!");
        console.log(data)
         return fakeRequestPromise("another3Domain.com")
    })
    .then((data) => {
        console.log("WORKING NEW3!!!")
        console.log(data)
        return fakeRequestPromise("another4Domain.com")
    })
    .catch((err) => { //stačí 1 .catch jelikož se vždy pracuje na stejné úrovni
        console.log("NOT WORKING") //vrací se vždy 1 zpráva, ale....who cares...je to lerpší než callback
        console.log(err)
    });
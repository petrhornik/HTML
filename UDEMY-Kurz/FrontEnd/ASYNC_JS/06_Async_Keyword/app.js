// async function hello(){
//
// }

const hello = async () => {
    
    // throw new Error("OOPS SOMETHING WENT WRONG"); // pomocí tohoto lze specifikovat vlastní errory např. při volání API pomocí if podmínek
    throw "OOPS SOMETHING IS WRONG"; // lze hodit i string místo Error objektu
    return  "HELLO THERE";
    
}

// pro vypisování chyb u promise se použije .catch blok (.then => úspěch promise, .catch => neúspěch promise)

hello()
    .then((data) => {
        console.log("Promise resolved with:", data)
        document.body.style.backgroundColor = "lightblue"; 
    })
    .catch((err) => {
        console.log("Promise rejected with:", err)
    });



const login = async (username, password) => {
    if(!username || !password){
        throw "MISSING CREDENTIALS";
    };
    if (password === "crazyarabian123"){    
        return "WELCOME BACK", username;
    };
    throw "INVALID PASSWORD";
};

login("user", "crazyarabian123")
    .then((msg) => {
        console.log("LOGGED IN!", msg)
    })
    .catch((err) => {
        console.log("ERROR!", err)
    });
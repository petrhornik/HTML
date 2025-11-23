// async function hello(){
//
// }

const hello = async () => {
    return  "HELLO THERE";
}

hello().then((data) => {
    console.log("Promise resolved with:", data)
})
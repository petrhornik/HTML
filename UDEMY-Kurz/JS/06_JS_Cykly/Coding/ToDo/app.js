// ToDoList CodeAlong

const ToDoList = [];
let choser = prompt("Vyberte funkci...");


while (true){
    if (choser === "new"){
        let adder = prompt("Zadejte položku...");
        ToDoList.push(adder);
        choser = prompt("Vyberte funkci...");
    }else if(choser === "list"){
        for(let i = 0; i < ToDoList.length; i++){
            console.log(`${i}. ${ToDoList[i]}`)
        }
        choser = prompt("Vyberte funkci...");
    }else if(choser === "delete"){
        let remover = prompt("Zadejte položku...");
        ToDoList.filter(!remover);
    }else if(choser === "quit" || choser === "q"){
        console.log("Nashledanou....")
        break;
    }else{
        choser = prompt("Neplatné zadání...zkuste to prosím znovu :D")
    }
}
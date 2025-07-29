//import material ui komponenty List

import List from '@mui/material/List';
import ToDoComponent from './ToDoComponent'; //část kédu je v samostatné komponentě!
import { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const getInitToDos = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    if(!data) return [];
    return data;
    
};

export default function ToDoList(){
    const [todos, setTodos] = useState(getInitToDos)

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(todos));
    }, [todos])

    // funkcionalita mazání položek
    const removeToDo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(obj => obj.id !== id);
        })
    };

    // funkcionalita zaškrtnutí položky
    const checkedBox = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map((val) =>{
                if(val.id === id){
                    return {...val, completed: !val.completed};
                }else{
                    return val;
                }
            })
        });
    }

    const addToDo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, {id: crypto.randomUUID(), text: text, completed: false}];
        })
    };

    return(
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            m: 3,
        }}>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                React ToDos :D
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((val) => { //pokud renderujeme položky pomocí mapy tak NIKDY nezapomenout na return hned po { !!!!
                    return <ToDoComponent id={val.id} todo={val.text} completed={val.completed} remove={removeToDo} check={() => checkedBox(val.id)}/>
                })};
                <ToDoForm addToDo={addToDo}/>                                                                                 
            </List>
        </Box>
    );                              //u ListItemText přepíšu primary={ODKAZ_NA_POLOZKU_ARRAY.ODKAZ_NA_HODNOTU_TEXT_V_OBJ}
                                    //  ->bude vypisovat text na bázi primary
                                    //- fce pro remove lze passovat pomocí arrow nebo klasicky a poté se její hodnota přenese do useState v child
}





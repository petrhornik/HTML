import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

export default function ToDoComponent({id, todo, completed, remove, check}){
    
    const removeToDo = () => {
        return remove(id)
    };

    const labelId = `checkbox-list-label-${id}`; //pro propojení checkboxu a labelu(chckbox bez labelu => lame a useless)
        return (
            <ListItem
                key={id}    //zde by mělo být obsaženo id položky(objektu)
                secondaryAction={ 
                    <IconButton edge="end" onClick={removeToDo} aria-label="comments"> 
                    <DoDisturbOnIcon />
                    </IconButton>
                }
                disablePadding
            >
                <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={completed} //hodnota pro zobrazení stavu
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                            onChange={check}
                        />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={todo}/>
                </ListItemButton>
            </ListItem>
        ); 

}
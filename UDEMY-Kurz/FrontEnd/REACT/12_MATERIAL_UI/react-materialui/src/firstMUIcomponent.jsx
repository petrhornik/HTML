import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function FirstMUIcomponent(){ //nerenderujeme HTML button, ale komponent který ve finále HTML button vyrenderuje
    return(
        <div>
            <h1>Ukázka komponenty tlačítka</h1>
            <hr />
            <h2>Komponent tlačítka z MUI</h2>
            <Button variant="contained" onClick={() => alert("HELLO")}>Contained</Button>
            <Button variant="outlined">Contained</Button>
            <Button variant="text">Contained</Button>
            <hr />
            <h2>Úpravy barev</h2>
            <Button variant='contained' color='error'>ERROR</Button>
            <Button variant='contained' color='success'>SUCCESS</Button>
            <Button variant='contained' color='secondary'>SECONDARY</Button>
            <Button variant='contained' color='primary'>PRIMARY</Button>
            <hr />
            <h2>Úprava velikosti</h2>
            <Button variant='contained' color='primary' size='small'>SMOL</Button>
            <Button variant='contained' color='primary' size='medium'>MEDIUM</Button>
            <Button variant='contained' color='primary' size='large'>LARGE</Button>
            <hr />
            <h2>Tlačísko s ikonou</h2>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>
    );
}
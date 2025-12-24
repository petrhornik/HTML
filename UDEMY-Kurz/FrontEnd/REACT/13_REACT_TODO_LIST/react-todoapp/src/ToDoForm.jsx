import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Create from "@mui/icons-material/Create";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

// komponenta pole pro zadávání todo
export default function ToDoForm({addToDo}) {
  const [text, setText] = useState("");

  const textUpdate = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (evt) => {
        console.log(evt)
        evt.preventDefault();
        addToDo(text);
        setText("");
  };

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={text}
          onChange={textUpdate}
          InputProps={{
            //pomocí InputProps přidáme tlačítko do textového pole - už moc dlouho fungovat nebude...
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="test text" edge="end" type="submit">
                  <Create />
                </IconButton>
              </InputAdornment>
              
            ),
          }}
        />
      </form>
    </ListItem>
  );
}

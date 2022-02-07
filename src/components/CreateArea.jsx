import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom'

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [textBoxRender, setTextBoxRender] = React.useState(false);

  function Expand(event){
    setTextBoxRender(true);
  }


  return (
    <div>
      <form className="create-note">
        {
            textBoxRender ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
            /> : null           
        }

        <textarea
          onClick={Expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={textBoxRender ? "3" : "1"}
        />
        <Zoom in={textBoxRender}>
            <Fab onClick={submitNote}>
                <AddIcon />
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

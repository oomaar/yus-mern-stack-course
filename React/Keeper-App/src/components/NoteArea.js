import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const NoteArea = (props) => {

    // Aiming The Final Behavior of thew noteArea Animation
    const [isExpanded, setExpanded] = useState(false);

    const changeState = () => {
        setExpanded(true);
    }

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote(prevNote => { return { ...prevNote, [name]: value } });
    }

    const submitNote = (event) => {
        props.onAdd(note);
        event.preventDefault();
        setNote({
            title: "",
            content: ""
        });
    }
    return (
        <div>
            <form className="create-note">
                {isExpanded && <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />}
                <textarea onClick={changeState} onChange={handleChange} value={note.content} name="content" placeholder="Take a note... " rows={isExpanded ? "3" : "1"} />
                <Zoom in={isExpanded && "true"}>
                    <Fab onClick={submitNote} > <AddIcon /> </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default NoteArea;

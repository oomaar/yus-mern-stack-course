import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Note = (props) => {

    const handleClick = () => {
        props.onDel(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p> {props.content} </p>
            <button onClick={handleClick}> <DeleteForeverIcon /> </button>
        </div>
    );
}

export default Note;
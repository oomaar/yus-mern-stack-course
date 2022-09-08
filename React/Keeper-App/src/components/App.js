import React, { useState } from "react";
import Header from "./Header.js";
import NoteArea from './NoteArea';
import Note from "./Note.js";
import Footer from "./Footer.js";
// import notes from "../notes.js";

const App = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    const deleteNote = (id) => {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <NoteArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDel={deleteNote} />
            })}
            <Footer />
        </div>
    );
}

export default App;


// {notes.map((note) => {
//     return (
//         <Note  />
//     );
// })}
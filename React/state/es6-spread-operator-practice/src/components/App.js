import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (inputText) => {
    setItems(prevItems => [...prevItems, inputText]);
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    });
  }

  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea onAdd={addItem} />

      <ul>
        {items.map((toDoItem, index) => <ToDoItem key={index} id={index} text={toDoItem} onChecked={deleteItem} />)}
      </ul>

    </div>
  );
}

export default App;

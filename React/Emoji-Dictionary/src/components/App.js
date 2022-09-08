import React from "react";
import Card from "./Card.js";
import emojipedia from "../emojipedia.js";

// 1.Create an entry Component
// 2.Refactor Hard Coded Data 
// 3.Add props to the entry component and map through it's props

function createTerm(emoji) {
  return (
    <Card
      key={emoji.id}
      id={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createTerm)}
      </dl>
    </div>
  );
}

export default App;

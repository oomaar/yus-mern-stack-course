import React, { useState } from "react";

function App() {

  // const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMousedOver] = useState(false);

  // function handleClick() {
  //   setHeadingText("Submited");
  // }

  function handleMouseOver() {
    setMousedOver(true);
  }

  function handleMouseOut() {
    setMousedOver(false);
  }

  // React Forms

  const [name, setName] = useState("");

  function handleChange(event) {
    //   console.log(event.target.value);
    //   console.log(event.target.placeholder);
    setName(event.target.value);
  }

  const [headingText, setHeadingText] = useState("");
  function handleClick() {
    setHeadingText(name);
  }

  return (
    <div className="container">
      <h1> Hello {headingText} </h1>
      {/* <h2> Hello {name} </h2> */}
      <input type="text"
        placeholder="What's your name?"
        onChange={handleChange}
        value={name}
      />

      <button
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        onClick={handleClick}
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
      >Submit</button>
    </div>
  );
}

export default App;

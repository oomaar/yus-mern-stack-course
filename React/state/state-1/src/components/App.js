import React from 'react';

const App = () => {
  var isDone = false;

  function strike() {
    // document.getElementById("root").style.textDecoration = "line-through";
    isDone = true;
  }

  function unStrike() {
    // document.getElementById("root").style.textDecoration = null;
    isDone = false;
  }

  return (
    <div>
      <p style={isDone ? strikeThrough : null}> Play Gym </p>
      <button onClick={strike}>Strike Through</button>
      <button onClick={unStrike}>unStrike Through</button>
    </div>
  );
}

export default App;



















//import React from "react";

// var isDone = false;

// function strike() {
//   isDone = true;
// }

// function unStrike() {
//   isDone = false;
// }

// const App = () => {
//   return (
//     <div>
//       <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
//       <button onClick={strike}>Change to strike through</button>
//       <button onClick={unStrike}>Change back</button>
//     </div>
//   );
// }

// export default App;

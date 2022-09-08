import React, { useState } from "react";

// My Answer
function App() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  const newTime = () => {
    const newTimee = new Date().toLocaleTimeString();
    setTime(newTimee);
  }
  setInterval(newTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={newTime}>Get Time</button>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';

// Angela's Answer
// const App = () => {
//   const now = new Date().toLocaleTimeString();
//   const [time, setTime] = useState(now);

//   const updateTime = () => {
//     const newTime = new Date().toLocaleTimeString();
//     setTime(newTime);
//   }

//   setInterval(updateTime, 1000);

//   return (
//     <div>
//       <h1>{time}</h1>
//       <button onClick={updateTime}>Get Time</button>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  }

  const dec = () => {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}

export default App;


























// console.log(state[0]);
  // Destrusturing example
  // const [red, green, blue] = [9, 132, 227];
  // console.log(blue);
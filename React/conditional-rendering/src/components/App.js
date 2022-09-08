import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// function renderCodetionaly() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>
//   } else {
//     return (<Login />);
//   }
// else {
//   return (
//     <form className="form">
//       <input type="text" placeholder="Username" />
//       <input type="password" placeholder="Password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// }
//}

//Ternary Operator
// isLoggedIn === true ? <h1>Hello</h1> : <Login />
// {/* <h1>Hello</h1> */}
//       {/* {renderCodetionaly()} */}


//And (&&) Operator
// const currentTime = new Date().getHours();
// line 1: currentTime > 12 ? <h1>Why are you still working</h1> : null
//Line 2: currentTime > 12 && <h1>Why are you still working</h1>
//Line 1 and Line 2 both do the same thing !
// if the left hand side of the line is false then there is no need to run whats on the right hand side of the code 

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/* {currentTime > 12 && <h1>Why are you still working</h1>} */}
    </div>
  );
}

export default App;

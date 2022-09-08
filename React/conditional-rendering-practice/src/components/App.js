import React from "react";
import Form from "./Form"
// import Register from "./Register";
// import Login from "./Login";

var userIsRegistered = true;

const App = () => {
  return (
    <div className="container">
      <Form
        isRegistered={userIsRegistered}
      />
    </div>
  );
}

export default App;


// {!userIsRegistered && <Register />}
//       {userIsRegistered && <Login />}
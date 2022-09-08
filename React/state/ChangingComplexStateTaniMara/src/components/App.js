import React, { useState } from "react";

function App() {

  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  const handleChange = (event) => {
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    const { value, name } = event.target;


    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          firstName: value,
          lastName: prevValue.lastName
        }
      } else if (name === "lName") {
        return {
          firstName: prevValue.firstName,
          lastName: value
        }
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {fullName.firstName} {fullName.lastName} </h1>
      <form>
        <input name="fName" placeholder="First Name" value={fullName.firstName} onChange={handleChange} />
        <input name="lName" placeholder="Last Name" value={fullName.lastName} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

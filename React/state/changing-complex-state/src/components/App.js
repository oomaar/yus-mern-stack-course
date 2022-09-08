import React, { useState } from "react";

function App() {

  //   const [fullName, setFullName] = useState({
  //     fName: "",
  //     lName: ""
  //   });

  //   const handleChange = (event) => {
  //     // const newValue = event.target.value;
  //     // const inputName = event.target.name;

  //     const { newValue, inputName } = event.target;

  //     setFullName(prevValue => {
  //       // console.log(prevValue);
  //       if (inputName === "fName") {
  //         return {
  //           fName: newValue,
  //           lName: prevValue.lName
  //         }
  //       } else if (inputName === "lName") {
  //         return {
  //           fName: prevValue.fName,
  //           lName: newValue
  //         }
  //       }
  //     });
  //   }

  //   function handleClick(event) {
  //     event.preventDefault();
  //   }

  //   return (
  //     <div className="container">
  //       <h1> Hello {fullName.fName} {fullName.lName} </h1>
  //       <form onSubmit={handleClick}>
  //         <input onChange={handleChange} value={fullName.fName} name="fName" placeholder="First Name" />
  //         <input onChange={handleChange} value={fullName.lName} name="lName" placeholder="Last Name" />
  //         <button>Submit</button>
  //       </form>
  //     </div>
  //   );
  // }


  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lname: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

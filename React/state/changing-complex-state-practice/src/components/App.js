import React, { useState } from "react";

const App = () => {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact(prevValue => ({ ...prevValue, [name]: value }));
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" value={contact.firstName} onChange={handleChange} />
        <input name="lName" placeholder="Last Name" value={contact.lastName} onChange={handleChange} />
        <input name="email" placeholder="Email" value={contact.emaill} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

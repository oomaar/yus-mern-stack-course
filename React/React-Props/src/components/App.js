import React from "react";
import Card from "./Card.js";
import contacts from "../contacts.js";
// import Avatar from "./Avatar.js";

function createCard(contact) {
  return (<Card
    key={contact.id}//This is not for us to use
    id={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
  />);
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;




{/*
      <Avatar img="https://pbs.twimg.com/profile_images/744849215675838464/IH0FNIXk_400x400.jpg" />
 
      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      /> */}
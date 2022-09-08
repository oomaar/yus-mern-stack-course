import React, { useState } from "react";

function AppClone() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    function handleFname(event) {
        const firstName = event.target.value;
        setFname(firstName);
    }

    function handleLname(event) {
        setLname(event.target.value);
    }

    function handleClick(event) {
        event.preventDefault();
    }

    return (
        <div className="container">
            <h1> Hello {fname} {lname} </h1>
            <form onSubmit={handleClick}>
                <input onChange={handleFname} value={fname} name="fName" placeholder="First Name" />
                <input onChange={handleLname} value={lname} name="lName" placeholder="Last Name" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AppClone;

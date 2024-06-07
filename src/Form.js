import React, { useState } from "react";
import "./Form.css";
export default function Form() {
  const [fullName, setFullName] = useState("");
  return (
    <div className="container">
      <h1>Full Name Display</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event);
          setFullName(
            event.target["first-name"].value +
              " " +
              event.target["last-name"].value
          );
        }}
      >
        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="first-name" name="first-name" required></input>
        <br />
        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="last-name" name="last-name" required></input>
        <br />
        <button type="submit">Submit</button>
        {fullName.length > 0 && (
          <div>
            <p>Full Name: {fullName}</p>
          </div>
        )}
      </form>
    </div>
  );
}

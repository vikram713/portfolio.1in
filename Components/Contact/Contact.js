import React from "react";
import { useState } from "react";
import "../Contact/Vikram.css";

function FirebaseDemo() {
  const [details, setDetails] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { fName, lName, email } = details;

    const res = await fetch(
      "https://vikram-a18c2-default-rtdb.firebaseio.com/vikram.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName,
          lName,
          email,
        }),
      }
    );
  };

  return (
    <div className="form">
      <div className="left">
        <span>
          {" "}
          Get In Touch <br /> contact me{" "}
        </span>{" "}
      </div>{" "}
      <div className="right">
        <form>
          <input
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => setDetails({ ...details, fName: e.target.value })}
          />{" "}
          <input
            type="text"
            placeholder="Enter your last name"
            onChange={(e) => setDetails({ ...details, lName: e.target.value })}
          />{" "}
          <input
            type="email"
            placeholder="Enter your Email address"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />{" "}
          <button className="po" onClick={PostData}>
            {" "}
            Submit{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}

export default FirebaseDemo;

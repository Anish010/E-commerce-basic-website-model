import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="register">
      <h1>Register</h1>
      <input className="inputBox" type="text" placeholder="Enter Name" />
      <input className="inputBox" type="email" placeholder="Enter Email" />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Passoword"
      />
      <button className="appButton" type="button">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;

import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignUp = () => {
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

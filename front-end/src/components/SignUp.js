import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); //use to redirect
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  //integrating API
  const collectData = async () => {
    //console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="register">
        <h1>Register</h1>
        <input
          className="inputBox"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          className="inputBox"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <input
          className="inputBox"
          type="password"
          placeholder="Enter Passoword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="appButton" type="button" onClick={collectData}>
        Sign Up
      </button>
    </>
  );
};

export default SignUp;

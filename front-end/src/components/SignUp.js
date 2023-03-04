import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
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
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBInput
        wrapperClass="mb-4"
        id="signup-form1"
        type="text"
        placeholder="Enter Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        id="signup-form2"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        id="signup-form3"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="primary"
        size="md"
        style={{ marginBottom: "10px" }}
        onClick={collectData}
      >
        Sign Up
      </Button>
    </MDBContainer>
  );
};

export default SignUp;

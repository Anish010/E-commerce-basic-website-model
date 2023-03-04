import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);
  const handleLogin = async () => {
    // console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please enter correct login details.");
    }
  };

  const navigateSignUp = () => {
    navigate("/signup");
  };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBInput
        wrapperClass="mb-4"
        id="form1"
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <MDBInput
        wrapperClass="mb-4"
        id="form2"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="primary"
        size="md"
        style={{ marginBottom: "10px" }}
        onClick={handleLogin}
      >
        Sign In
      </Button>

      <div className="text-center">
        <p>
          Not a member?{" "}
          <a href="#!" onClick={navigateSignUp}>
            Register
          </a>
        </p>
      </div>
    </MDBContainer>
  );
};
export default Login;

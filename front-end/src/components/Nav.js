import React from "react";
import { Link, useNavigate } from "react-router-dom";
//functional component for navigation bar
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="nav-bar">
      <Link to="/home">
        <img
          src="https://vantageid.com/wp-content/uploads/2020/10/icon-blue-bg-inventory.svg"
          className="logo"
        />
      </Link>

      {auth ? (
        <ul className="nav-ul">
          <li className="nav-float-left">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-float-left">
            <Link to="/">Inventory</Link>
          </li>
          <li className="nav-float-left">
            <Link to="/add">Add Product</Link>
          </li>
          <li className="nav-float-right">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="nav-float-right">
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;

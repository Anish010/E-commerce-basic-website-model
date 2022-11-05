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
    <div className="nav-ul">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>
        <li>
          <Link to="/update">Update Product</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          {auth ? (
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          ) : (
            <>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;

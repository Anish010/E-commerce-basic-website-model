import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
//functional component for navigation bar
const Nav = () => {
  const auth = localStorage.getItem("user");
  if (auth) {
    var username = JSON.parse(localStorage.getItem("user")).email;
    username = JSON.stringify(username);
    username = username.split("@")[0];
    username = username.replace('"', "");
    console.log(username);
  }

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="nav-bar">
      <img
        alt="logo"
        src="https://vantageid.com/wp-content/uploads/2020/10/icon-blue-bg-inventory.svg"
        className="logo"
      />

      {auth ? (
        <ul className="nav-ul">
          <li className="nav-float-left">
            <Link to="/">Inventory</Link>
          </li>
          <li className="nav-float-left">
            <Link to="/add">Add Product</Link>
          </li>
          <li className="nav-float-right">
            <Link to="/profile">
              {username} <FaUserAlt />
            </Link>
          </li>
          <li className="nav-float-right">
            <Link onClick={logout} to="/signup">
              <MdLogout style={{ margin: "5px" }} />
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

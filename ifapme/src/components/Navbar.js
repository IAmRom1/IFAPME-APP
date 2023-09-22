import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Login</li>
        </NavLink>
        <NavLink to="/Register">
          <li>Register</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;

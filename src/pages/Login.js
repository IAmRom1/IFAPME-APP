import React, { Component } from "react";
import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";

const Login = () => {

  
  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="Login">
      <Logo />
      <div className="container">
        <h1>Connexion</h1>
        <form>
          <input type="email" placeholder="Email" name="email" id="email" />
          <input
            type="password"
            placeholder="Mots de passe"
            name="password"
            id="password"
          />
          <input onClick={handleSubmit} type="submit" value="Se connecter" />
        </form>
        <NavLink to="/Forget_Passwords">
          <p>Mots de passe oublié?</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;

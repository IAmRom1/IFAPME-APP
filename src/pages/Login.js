import React, { useState } from "react";
import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("test");

    try {
      const response = await axios.post("http://localhost/database_ifapme/login.php", {
        email: email,
        password: password,
      });

      if (response.data.success) {
        setMessage(response.data.message);

        navigate("/Tableau_de_bord");
      } else {
        setMessage(response.data.message);
      }
      console.log("err", response.data.error);
    } catch (error) {
      console.error("Erreur Axios :", error);
    }
  };

  return (
    <div className="Login">
      <Logo />
      <div className="container">
        <h1>Connexion</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input onClick={handleSubmit} type="submit" value="Se connecter" />
        </form>
        <p>{message}</p>
        <NavLink to="/Forget_Passwords">
          <p>Mot de passe oublié ?</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;

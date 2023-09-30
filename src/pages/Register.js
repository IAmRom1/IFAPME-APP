import React, { useState } from "react";
import Logo from "../components/Logo";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^\+?[0-9\s]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Adresse email invalide");
    } else {
      setEmailError("");
    }
    if (!phonePattern.test(phone)) {
      setPhoneError("Numéro de téléphone invalide");
    } else {
      setPhoneError("");
    }
    if (password.length < 8) {
      setPasswordError("Le mot de passe doit avoir au moins 8 caractères");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="Register">
      <Logo />
      <div className="container">
        <h1>S'inscrire</h1>
        <form>
          <input type="text" placeholder="Nom" name="name" id="name" required />
          <input type="text" placeholder="Prénom" name="firstname" id="firstname" required/>
          <input type="email" placeholder="E-mail" name="email" id="email" required
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          {emailError && <p className="error">{emailError}</p>}
          <input type="text" placeholder="Tél." name="phone" id="phone" maxLength={17} minLength={13} required
            min={0}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}/>
          {phoneError && <p className="error">{phoneError}</p>}
          <input type="password" placeholder="Mots de passe" name="password" id="password" required
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          {passwordError && <p className="error">{passwordError}</p>}
          <input onClick={handleSubmit} type="submit" value="S'inscrire" />
        </form>
      </div>
    </div>
  );
};

export default Register;

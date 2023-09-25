import React, { useState } from 'react';
import Logo from '../components/Logo';

const ForgetPasswords = () => {
  const [emailValue, setEmailValue] = useState("");
  const [info, setInfo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo("Si [" + emailValue + "]  est votre adresse e-mail, vous recevrez un e-mail de confirmation.");
  }
  const handleChange = (e) => {
    setEmailValue(e.target.value);
  }
  return (
    <div className='ForgetPasswords'>
      <Logo />
      <div className="container">
        <h1>Mots de passe oublié ?</h1>
        <form onSubmit={handleSubmit}> 
          <input type="email" name="email" id="email" placeholder='Email'
            value={emailValue}
            onChange={handleChange}
          />
          <p>{info}</p>
          <input type="submit" value="Valider" />
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswords;

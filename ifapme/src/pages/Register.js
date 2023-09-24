import React, { useState } from 'react';
import Logo from '../components/Logo';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            setEmailError("Adresse email invalide");
        } else {
            setEmailError("");
        }
        if (password.length < 8) {
            setPasswordError("Le mot de passe doit avoir au moins 8 caractères");
        } else {
            setPasswordError("");
        }
    }

    return (
        <div className='Register'>
            <Logo />
            <div className="container">
                <h1>S'inscrire</h1>
                <form>
                    <input type="text" placeholder='Nom' name="name" id="name"/>
                    <input type="text" placeholder='Prénom' name="firstname" id="firstname" />
                    <input type="email" placeholder='E-mail' name="email"id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p className="error">{emailError}</p>}
                    <input type="number" placeholder='Tél.' name="phone" id="phone"
                        min={0}
                    />
                    <input type="password" placeholder='Mots de passe' name="password" id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <p className="error">{passwordError}</p>}
                    <input onClick={handleSubmit} type="submit" value="S'inscrire" />
                </form>
            </div>
        </div>
    );
};

export default Register;

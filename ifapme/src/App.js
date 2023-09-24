import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Horaire from "./pages/Horaire";
import BordAdmin from "./pages/BordAdmin";
import Contact from "./pages/Contact";
import Profil from "./pages/Profil";
import ForgetPasswords from "./pages/ForgetPasswords";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Horaire" element={<Horaire />} />
        <Route path="/Tableau_de_bord" element={<BordAdmin />} />
        <Route path="/Profil" element={<Profil/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Forget_Passwords" element={<ForgetPasswords/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

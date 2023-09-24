import React from "react";
import { NavLink } from "react-router-dom";
import logoIfapme from "../assets/icons/ifapme_logo.svg";

const NavbarAdmin = () => {
  return (
    <div className="navbar">
      <img src={logoIfapme} alt="Logo IFAPME" />
      <ul>
        <li>
          <NavLink to="/Horaire" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
            Horaire
          </NavLink>
        </li>
        <li>
          <NavLink to="/Tableau_de_bord" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
            Tableau de bord
          </NavLink>
        </li>
        <li>
          <NavLink to="/Profil" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
            Profil
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarAdmin;

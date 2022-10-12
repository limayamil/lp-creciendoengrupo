import React from "react";
import LogoCreciendo from "../../Assets/logo_creciendo.svg";
import LogoCEG from "../../Assets/logo_ceg_black.svg";
import Divider from "../../Assets/navbar_divider.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="row py-4">
        <nav className="row col-navbar">
          <div className="navbar-brand col-6 col-sm-6">
            <img src={LogoCreciendo} alt="Logo Creciendo en Grupo" />
            <img
              src={Divider}
              alt="Divider"
              className="px-4 d-none d-lg-inline-block"
            />
            <span className="d-none d-lg-inline-block">
              Herramientas para potenciar tu negocio 2022
            </span>
          </div>
          <div className="navbar-ceglogo col-6 col-sm-6">
            <img
              src={LogoCEG}
              alt="Logo Comprando en Grupo"
              id="navbar-logoceg"
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

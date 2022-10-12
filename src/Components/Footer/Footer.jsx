import React from "react";
import "./Footer.css";
import LogoCEG from "../../Assets/logo_ceg_white.svg";
import IcoFB from "../../Assets/ico_fb.svg";
import IcoIG from "../../Assets/ico_ig.svg";
import IcoIN from "../../Assets/ico_in.svg";
import IcoTW from "../../Assets/ico_tw.svg";
import IcoB from "../../Assets/ico_emp_b.svg";

const Footer = () => {
  return (
    <footer className="container-fluid py-5">
      <div className="container">
        <div className="row row-footer">
          <div className="text-center text-sm-left col-12 col-md-2">
            <a
              href="https://comprandoengrupo.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LogoCEG}
                alt="Logo Comprando en Grupo"
                id="logo-ceg"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-12 text-center text-sm-left my-3 my-md-0 col-md-4">
            <p>Comprando en Grupo - Todos los derechos reservados</p>
          </div>
          <div className="col-12 col-md-6 mt-3 mt-md-0 col-socials">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/Comprandoengrupo.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={IcoFB} alt="Facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/comprandoengrupo/?hl=es"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={IcoIG} alt="Instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/comprandoengrupo.net/mycompany/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={IcoIN} alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ceg_argentina"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={IcoTW} alt="Twitter" />
                </a>
              </li>
            </ul>
            <div>
              <img id="logo-empresa-b" src={IcoB} alt="Empresa B Certificada" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

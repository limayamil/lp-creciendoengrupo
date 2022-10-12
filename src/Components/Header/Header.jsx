import React from "react";
import HeaderImg from "../../Assets/header_victoria_longo.webp";
import "./Header.css";

const Header = (props) => {
  if (props.tipo === "registro") {
    return (
      <>
        <header className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5 col-header-titulo">
                <h1 className="py-3">{props.titulo}</h1>
                <h2 className="py-3 py-sm-0">{props.subtitulo}</h2>
              </div>
              <div className="col-12 offset-0 col-lg-6 offset-lg-1">
                <img
                  src={HeaderImg}
                  alt="Nuevo evento de Creciendo en Grupo"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </header>
      </>
    );
  } else {
    return (
      <>
        <header className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5 col-header-titulo">
                <h1 className="py-3 pt-5 pt-lg-0">{props.titulo}</h1>
                <h5 className="py-3 py-sm-0">{props.subtitulo}</h5>
              </div>
              <div className="col-12 offset-0 col-lg-6 offset-lg-1">
                <img
                  src={HeaderImg}
                  alt="Nuevo evento de Creciendo en Grupo"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
};

export default Header;

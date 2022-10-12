import React from "react";
import Header from "../Header/Header";
import "./Thanks.css";
import SocialIG from "../../Assets/ico_thanks_ig.svg";
import SocialTT from "../../Assets/ico_thanks_tiktok.svg";
import SocialWeb from "../../Assets/ico_thanks_web.svg";

const Thanks = () => {
  const titulo = "¡Gracias por inscribirte a nuestro Webinar!";
  const subtitulo = [
    "Te enviaremos el link de acceso, horas antes del evento, por mail.",
    <br />,
    <span className="highlighted">¡Te esperamos!</span>,
  ];

  return (
    <>
      <Header titulo={titulo} subtitulo={subtitulo} tipo="gracias" />
      <main>
        <div className="container">
          <div className="row my-5 pt-5">
            <div className="col-md-8 offset-md-2">
              <h3 className="mb-4">
                Para conocer más sobre la trayectoria de Victoria te invitamos a
                seguirla en sus redes sociales:
              </h3>
              <div className="thanks-social-container my-5">
                <a
                  href="https://www.instagram.com/ph_match/?hl=es-la"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="thanks-social-item">
                    <img src={SocialIG} alt="" />
                    <p>@ph_match</p>
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@ph_match"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="thanks-social-item">
                    <img src={SocialTT} alt="" />
                    <p>Ph_match</p>
                  </div>
                </a>
                <a
                  href="https://www.matchestudiofotografico.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="thanks-social-item">
                    <img src={SocialWeb} alt="" />
                    <p>Match</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Thanks;

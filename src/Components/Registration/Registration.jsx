import React from "react";
import Header from "../Header/Header";
import "./Registration.css";
import $ from "jquery";
import { useState } from "react";
import SocialIG from "../../Assets/ico_thanks_ig.svg";
import SocialYT from "../../Assets/ico_thanks_yt.svg";
import SocialTT from "../../Assets/ico_thanks_tiktok.svg";
import SocialWeb from "../../Assets/ico_thanks_web.svg";

const Registration = () => {
  const [formSent, setFormSent] = useState(false);
  const [eventAvailable, setEventAvailable] = useState(false);

  const titulo = [
    "¡Mariano Sirena, CEO de ",
    <span className="highlighted">Milbrands</span>,
    ", en Creciendo en Grupo!",
  ];
  const subtitulo = "Aumentá tus ventas en Mercado Libre y en tu eCommerce";

  const tituloGracias = "¡Gracias por inscribirte a nuestro Webinar!";
  const subtituloGracias = [
    "Te enviaremos el link de acceso, horas antes del evento, por mail.",
    <br />,
    <span className="highlighted">¡Te esperamos!</span>,
  ];

  const tituloSinEventos = "Estamos trabajando en el próximo webinar.";

  $(function () {
    $("#otro-rubro").css("visibility", "hidden").css("position", "absolute");
    $("#rubro").change(function () {
      var i = $("#rubro").val();
      if (i === "Otra Actividad y/o Rubro") {
        $("#otro-rubro")
          .css("visibility", "visible")
          .css("position", "relative");
        $("#otrorubro").prop("required", true);
      } else {
        $("#otro-rubro")
          .css("visibility", "hidden")
          .css("position", "absolute");
        $("#otrorubro").prop("required", false);
      }
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = {
      nombre: $("input[name=input-nombre]").val(),
      telefono: $("input[name=input-telefono]").val(),
      email: $("input[name=input-email]").val(),
      cuit: $("input[name=input-cuit]").val(),
      titular: $("#titular").val(),
      rubro: $("#rubro").val(),
      otrorubro: $("input[name=input-otrorubro]").val(),
      asesor: $("input[name=input-asesor]").val(),
      //razon : $('input[name=input-nombre]').val(),
      //tiposocial : $('#tipo-social').val(),
      //url : $('input[name=url]').val()
    };
    console.log(data);

    $.ajax({
      url: "https://hooks.zapier.com/hooks/catch/5458522/ov4q5a4/",
      type: "POST",
      //data: $("#formulario").serialize(),
      data: JSON.stringify(data),
      success: function () {
        setFormSent(true);
      },
    });
  };

  if (!eventAvailable) {
    return (
      <>
        <Header
          titulo={tituloSinEventos}
          tipo="sinevento"
        />
        <main>
          <div className="container">
            <div className="row my-5 pt-5">
              <div className="col-lg-6 offset-lg-3">
                <h2 className="mb-4 text-center">
                  En la espera no desesperes.
                </h2>
                <p className="weight-semibold">
                  Muy pronto llega el próximo webinar de Creciendo en Grupo,
                  mientras tanto reviví los anteriores en la sección Academia de
                  Comunidad CEG:
                </p>
                <div className="actions my-5 text-center">
                  <a
                    href="https://comunidadceg.com/academia/?utm_source=Landing_webinar&utm_medium=Organic&utm_campaign=&utm_content=/#seccion-creciendo"
                    className="button-type px-5"
                    target="blank">
                    Academia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  } else {
    if (formSent) {
      return (
        <>
          <Header
            titulo={tituloGracias}
            subtitulo={subtituloGracias}
            tipo="gracias"
          />
          <main>
            <div className="container">
              <div className="row my-5 pt-5">
                <div className="col-md-8 offset-md-2">
                  <h3 className="mb-4">
                    Para conocer más sobre la trayectoria de Mariano te
                    invitamos a seguirlo en sus redes sociales:
                  </h3>
                  <div className="thanks-social-container my-5">
                    <a
                      href="https://www.instagram.com/marianosirena/"
                      target="_blank"
                      rel="noreferrer">
                      <div className="thanks-social-item">
                        <img
                          src={SocialIG}
                          alt=""
                        />
                        <p>marianosirena</p>
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/@detrasdelalgoritmo"
                      target="_blank"
                      rel="noreferrer">
                      <div className="thanks-social-item">
                        <img
                          src={SocialYT}
                          alt=""
                        />
                        <p>detrasdelalgoritmo</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      );
    } else {
      return (
        <>
          <Header
            titulo={titulo}
            subtitulo={subtitulo}
            tipo="registro"
          />
          <main>
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <h3 className="my-5">
                    ¡Llega el 1º encuentro de Creciendo en Grupo{" "}
                    <strong>edición 2023, de la mano de un experto!</strong>
                  </h3>
                  <p className="mb-4">
                    <strong>Junto a Mariano Sirena, CEO de Milbrands,</strong>{" "}
                    aprenderás cómo aumentar tus ventas en Mercado Libre y en tu
                    eCommerce con una gran estrategia integral de Marketing
                    Digital.
                  </p>
                  <p className="mb-4">
                    El encuentro se realizará el día
                    <strong> Jueves 30 de Marzo a las 19 hs via Zoom.</strong>
                  </p>
                  <p className="mb-4">
                    Anotate ya para asegurar tu lugar en el 1º webinar del ciclo
                    Creciendo en Grupo 2023.
                  </p>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-md-10 offset-md-1">
                  <form
                    action=""
                    type=""
                    id="formulario"
                    onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md">
                        <input
                          type="text"
                          name="input-nombre"
                          id="input-nombre"
                          placeholder="Nombre y Apellido *"
                          required
                        />
                      </div>
                      <div className="col-md">
                        <input
                          type="text"
                          name="input-telefono"
                          id="input-telefono"
                          placeholder="Nombre del comercio *"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md">
                        <input
                          type="email"
                          name="input-email"
                          id="input-email"
                          placeholder="Mail *"
                          required
                        />
                      </div>
                      <div className="col-md">
                        <input
                          type="number"
                          name="input-cuit"
                          id="input-cuit"
                          placeholder="CUIT *"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md">
                        <select
                          name="titular"
                          id="titular"
                          required>
                          <option
                            disabled
                            selected
                            value>
                            ¿Sos titular del comercio? *
                          </option>
                          <option value="Sí, soy el titular">
                            Sí, soy el titular
                          </option>
                          <option value="No, soy un colaborador/a">
                            No, soy un colaborador/a
                          </option>
                        </select>
                      </div>
                      <div className="col-md">
                        <input
                          type="text"
                          name="input-asesor"
                          id="input-asesor"
                          placeholder="¿Quién es tu asesor comercial?"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md">
                        <select
                          name="rubro"
                          id="rubro"
                          required>
                          <option
                            disabled
                            selected
                            value>
                            ¿A qué rubro pertenece tu comercio? *
                          </option>
                          <option value="Máquinas / Herramientas">
                            Máquinas / Herramientas
                          </option>
                          <option value="Ferretería">Ferretería</option>
                          <option value="Electricidad / Iluminación">
                            Electricidad / Iluminación
                          </option>
                          <option value="Grifería / Sanitarios">
                            Grifería / Sanitarios
                          </option>
                          <option value="Bazar / Artículos para el Hogar">
                            Bazar / Artículos para el Hogar
                          </option>
                          <option value="Camping / Pesca">
                            Camping / Pesca
                          </option>
                          <option value="Rodados">Rodados</option>
                          <option value="Deporte / Entretenimiento">
                            Deporte / Entretenimiento
                          </option>
                          <option value="Electrónica">Electrónica</option>
                          <option value="Pet Shop / Mascotas">
                            Pet Shop / Mascotas
                          </option>
                          <option value="Otra Actividad y/o Rubro">
                            Otra Actividad y/o Rubro
                          </option>
                        </select>
                      </div>
                    </div>
                    <div
                      className="row"
                      id="otro-rubro">
                      <div className="col">
                        <input
                          type="text"
                          placeholder="¿Cuál es el rubro de tu comercio? *"
                          name="input-otrorubro"
                          id="otrorubro"
                        />
                      </div>
                    </div>
                    <div className="row mt-4 row-submit justify-content-center">
                      <div className="col-md-3 text-center">
                        <input
                          type="submit"
                          value="Inscribirme"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h4 className="mb-5 pb-5">Sigamos creciendo juntos.</h4>
                </div>
              </div>
            </div>
          </main>
        </>
      );
    }
  }
};

export default Registration;

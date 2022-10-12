import React from "react";
import Header from "../Header/Header";
import "./Registration.css";
import $ from "jquery";
import "../Thanks/Thanks.css";
import { useState } from "react";
import SocialIG from "../../Assets/ico_thanks_ig.svg";
import SocialTT from "../../Assets/ico_thanks_tiktok.svg";
import SocialWeb from "../../Assets/ico_thanks_web.svg";

const Registration = () => {
  const [formSent, setFormSent] = useState(false);

  const titulo = [
    "¡Victoria Longo de ",
    <span className="highlighted">@ph_match</span>,
    " en Creciendo en Grupo!",
  ];
  const subtitulo =
    "Aprende a crear Reels que exploten de manera práctica y sencilla";

  const tituloGracias = "¡Gracias por inscribirte a nuestro Webinar!";
  const subtituloGracias = [
    "Te enviaremos el link de acceso, horas antes del evento, por mail.",
    <br />,
    <span className="highlighted">¡Te esperamos!</span>,
  ];

  $(function () {
    $("#otro-rubro").css("visibility", "hidden").css("position", "absolute");
    $("#rubro").change(function () {
      var i = $("#rubro").val();
      if (i == "Otra Actividad y/o Rubro") {
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
        console.log("omegapoggers");
        //window.location = "gracias";
        setFormSent(true);
        console.log(formSent);
      },
    });
  };

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
                  Para conocer más sobre la trayectoria de Victoria te invitamos
                  a seguirla en sus redes sociales:
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
  } else {
    return (
      <>
        <Header titulo={titulo} subtitulo={subtitulo} tipo="registro" />
        <main>
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <h3 className="my-5">
                  ¡Llega el 5º encuentro de Creciendo en Grupo edición 2022, de
                  la mano de una experta!
                </h3>
                <p className="mb-4">
                  <strong>Victoria Longo, creadora de de @ph_match</strong>,
                  fotógrafa y filmmaker experta en redes sociales, te compartirá
                  tips para hacer los mejores videos en Instagram con tu celular
                  y que puedas obtener grandes resultados.
                </p>
                <p className="mb-4">
                  El encuentro se realizará el día
                  <strong> Martes 25 de Octubre a las 19 hs via Zoom.</strong>
                </p>
                <p className="mb-4">
                  Anotate ahora mismo para participar del 5º webinar del Ciclo
                  Creciendo en Grupo 2022 donde aprenderás el paso a paso para
                  crear reels exitosos e impulsar tu comercio.
                </p>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-10 offset-md-1">
                <form action="" type="" id="formulario" onSubmit={handleSubmit}>
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
                      <select name="titular" id="titular" required>
                        <option disabled selected value>
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
                      <select name="rubro" id="rubro" required>
                        <option disabled selected value>
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
                        <option value="Camping / Pesca">Camping / Pesca</option>
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
                  <div className="row" id="otro-rubro">
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
                      <input type="submit" value="Inscribirme" />
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
};

export default Registration;

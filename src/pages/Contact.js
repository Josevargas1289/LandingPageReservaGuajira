import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import emailjs from "emailjs-com"; // Importar emailjs-com
import Swal from "sweetalert2";
import backgroundImage from "../assets/img/Galery/Viveros/imgViveros-10.jpg"


class Contact extends Component {
  handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los datos del formulario
    const formData = new FormData(event.target);
    const data = {
      to_name: "Destinatario", // Nombre del destinatario
      from_name: formData.get("con_name"),
      from_email: formData.get("con_email"),
      message: formData.get("con_message"),
    };

    // Enviar el formulario usando emailjs-com
    emailjs
      .send("service_84oy6fp", "template_yzgj402", data, "HKGEPgH0IjSAAlbzC")
      .then((response) => {
        Swal.fire({
          title: "Mensaje enviado",
          icon: "success",
          confirmButtonText: "Aceptar",
          customClass: {
            confirmButton: 'mi-clase-css',
           
          }
        });
        event.target.reset(); // Limpiar el formulario después del envío
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "su mensaje no se envio",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      });
  };

  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div
          className="breadcrumb-area breadcrumb-bg animate__animated animate__fadeInDown"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Contacto</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>Contacto</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  content page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Contact section start*/}
          <div className="conact-section">
            <div className="container">
              <div className="row section-space--bottom--50">
                <div className="col">
                  <div className="contact-map">
                    <iframe
                      title="google-map"
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2278.3481875697826!2d-76.1357837387079!3d8.692748884838704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDEnMzIuMyJOIDc2wrAwNyc1OS45Ilc!5e0!3m2!1ses-419!2sco!4v1712440864060!5m2!1ses-419!2sco"
                      width="600"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="contact-information">
                    <h3>Información de contacto</h3>
                    <ul>
                      <li>
                        <span className="icon">
                          <i className="ion-android-map" />
                        </span>
                        <span className="text">
                          <span>
                            Montería, Córdoba
                            <br />
                            Colombia
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-telephone-outline" />
                        </span>
                        <span className="text">
                          <strong>Movil</strong>
                          <br />
                          <strong>3178233433</strong>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-email-outline" />
                        </span>
                        <span className="text">
                          <span>Email</span>
                          <strong>reservanaturalpd@gmail.com</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="contact-form">
                    <h3>Dejanos un mensaje</h3>
                    <form id="contact-form" onSubmit={this.handleSubmit}>
                      <div className="row row-10">
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="con_name"
                            type="text"
                            placeholder="Nombre"
                            required
                          />
                        </div>
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="con_email"
                            type="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="con_message"
                            placeholder="Mensaje"
                            defaultValue={""}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit">Enviar Mensaje</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Contact section end*/}
        </div>
        {/*====================  End of content page content  ====================*/}

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Contact;

import React, { Component } from "react";
import imgecosistemassection from "../assets/img/imgBig/ecosistemasSection.png";

class AboutProyect extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        {/*====================  about text area ====================*/}
        <div className="about-text-area section-space--inner--120 ">
          <div className=" container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about-image-two">
                  <img
                    style={{
                      height: "330px",
                      borderRadius: "2%",
                    }}
                    src={imgecosistemassection}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="video-cta-content">
                  <h3 className="video-cta-content__subtitle">Ecosistemas</h3>
                  <br />
                  <p className="single-feature-icon__content">
                    Sumérgete en la maravilla de nuestros ecosistemas en la
                    Reserva Natural "El Paraíso de los Deseos"! Descubre la
                    exuberante diversidad de flora, desde majestuosos árboles
                    hasta coloridas flores que dan vida a nuestro paisaje.
                    <br />
                    Explora la fascinante fauna que habita en este paraíso,
                    desde aves cantarinas hasta animales terrestres y acuáticos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of about text area  ====================*/}
      </div>
    );
  }
}

export default AboutProyect;

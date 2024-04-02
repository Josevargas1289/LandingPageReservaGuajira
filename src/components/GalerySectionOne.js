import React, { Component } from "react";
import imggalerySectionOne from "../assets/img/imgBig/Img_galerySectionOne.jpg";

class GalerySectionOne extends Component {
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
                      borderRadius: "2%",
                    }}
                    src={imggalerySectionOne}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="video-cta-content">
                  <h3 className="video-cta-content__subtitle">Galería</h3>
                  <br />
                  <p className="single-feature-icon__content">
                    Explora nuestra galería y sumérgete en la riqueza de <br />
                    nuestros ecosistemas. Descubre los fascinantes <br />{" "}
                    proyectos de conservación que se llevan a cabo en la <br />{" "}
                    reserva natural Paraíso de los Deseos.
                    <br />
                    <br />
                    ¡Déjate inspirar por la belleza de la naturaleza y el
                    compromiso con la preservación ambiental!
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

export default GalerySectionOne;

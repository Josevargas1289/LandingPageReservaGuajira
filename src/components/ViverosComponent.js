import React, { Component } from "react";
import Modal6 from "./modal/Modal6";
import imgViveros from "../assets/img/imgBig/imagenViverosComponente.jpg";
class AboutText extends Component {
  render() {
    return (
      <div>
        {/*====================  about text area ====================*/}
        <div className="about-text-area  section-space--inner--120 animate__animated animate__fadeInDown">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="video-cta-content">
                  <h4 className="video-cta-content__small-title">VIVEROS</h4>
                  <h3 className="video-cta-content__title">
                    Promoción de la Biodiversidad
                  </h3>
                  <p className="video-cta-content__text">
                    Liderado por <strong>Solar Pack SPK</strong>, busca
                    conservar la biodiversidad y promover la producción
                    sostenible de especies vegetales de gran importancia
                    ecológica que se encuentran amenazadas según la UICN.
                  </p>
                  <Modal6 />
                </div>
              </div>
              <div className="col-md-6">
                <div className="cta-video-image__image">
                  <img src={imgViveros} className="img-fluid" alt="" />
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

export default AboutText;

import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import ModalB from "./modal/Modal";
import miniaturaimg from "../assets/img/imgBig/miniatura.jpg";

class AboutText extends Component {
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
        <div className="about-text-area grey-bg section-space--inner--120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about-image-two">
                  <img
                    style={{ borderRadius: "2%" }}
                    src={miniaturaimg}
                    alt=""
                  />
                  <span className="video-popup">
                    <ModalVideo
                      channel="youtube"
                      isOpen={this.state.isOpen}
                      videoId="nY5untzi8_k"
                      onClose={() => this.setState({ isOpen: false })}
                    />
                    <button
                      style={{ background: "#0A9D33" }}
                      onClick={this.openModal}
                    >
                      <i
                        className="ion-ios-play-outline"
                        style={{ color: "white" }}
                      />
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="video-cta-content">
                  <h3 className="video-cta-content__subtitle">
                    Bienvenido a la reserva natural paraiso de los deseos
                  </h3>
                  <p className="single-feature-icon__content">
                    Déjate cautivar por la fascinante historia que este lugar
                    tiene para ofrecer. ¡Te esperamos para una experiencia
                    inolvidable!
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

export default AboutText;

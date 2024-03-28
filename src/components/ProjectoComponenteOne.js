import React, { Component } from "react";
import imgMiniatura from "../assets/img/imgBig/imgMiniaturaProyecto.jpg";
import iconDescarg from "../assets/img/icon/iconDescarga.svg";
import InformeTecnico from "../assets/docs/informeTecnico.pdf";
import ModalVideo from "react-modal-video";

class ProjectComponentOne extends Component {
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
        <div className="about-text-area section-space--inner--120  ">
          <div className=" container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about-image-two">
                  <img
                    style={{ borderRadius: "2%" }}
                    src={imgMiniatura}
                    alt=""
                  />
                  <span className="video-popup">
                    <ModalVideo
                      channel="youtube"
                      isOpen={this.state.isOpen}
                      videoId="gyqUHIA6fNY"
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
                  <h3 className="video-cta-content__subtitle">Proyecto</h3>
                  <br />
                  <p className="single-feature-icon__content">
                    Ante la pérdida de bosques en la vereda San Rafael,
                    municipio de Montería, debido a la deforestación provocada
                    principalmente por actividades ganaderas, SOLARPACK COLOMBIA
                    S.A.S E.S.P (SPK) propone la creación de un arboretum en la
                    reserva natural "El Paraíso de los Deseos". El objetivo es
                    fomentar valores ecológicos y conciencia ambiental entre las
                    personas vinculadas a la reserva, con miras a conservar la
                    vida silvestre y los ecosistemas.
                  </p>
                  <div className="Container_info_tecnico">
                    <img src={iconDescarg} alt="" />
                    <strong>
                      <a
                        href={InformeTecnico}
                        download={"Informe Tecnico del proyecto"}
                      >
                        Ver Informe Técnico
                      </a>
                    </strong>
                  </div>
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

export default ProjectComponentOne;

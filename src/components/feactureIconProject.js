import React, { Component } from "react";
import iconarboretum from "../assets/img/icon/arboretumiconProyect.svg";
import arbolesVivosIcon from "../assets/img/icon/arbolesviconproject.svg";
import viverosIcon from "../assets/img/icon/viverosiconproject.svg";

class FeatureIconProject extends Component {
  render() {
    const { handleClickarboretum, handleClickArboles, handleClickViveros } =
      this.props;

    return (
      <div>
        <div className="feature-section containerIconProyect ">
          <div className="containerobjetEcosistemas">
            <div>
              <h1 className="single-feature-icon__content p-color">
                Conoce nuestros <br /> proyectos
              </h1>
              <p className="single-feature-icon__content p-color">
                Descubre nuestros proyectos de conservación <br /> y siembra.
                Únete a nosotros mientras trabajamos para <br /> preservar la
                biodiversidad, proteger hábitats <br /> amenazados y sembrar
                esperanza para un futuro <br /> sostenible.
              </p>
            </div>
            <div className="car-ecositemas">
              <div className="iconos-car">
                <img src={iconarboretum} alt="Flyer" />
                <button
                  onClick={handleClickarboretum}
                  className="arboretum_styled"
                >
                  Arboretum
                </button>
              </div>
              <div className="iconos-car car_fauna">
                <img src={arbolesVivosIcon} alt="Flyer" />
                <button
                  onClick={() => {
                    handleClickArboles();
                  }}
                  className="arbolesVivos_styled"
                >
                  Arboles Plus
                </button>
              </div>
              <div className="iconos-car car_fauna">
                <img src={viverosIcon} alt="Flyer" />
                <button
                  onClick={() => {
                    handleClickViveros();
                  }}
                  className="viveros_styled"
                >
                  Viveros
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureIconProject;

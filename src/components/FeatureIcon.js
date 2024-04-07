import React, { Component } from "react";
import imgFlayer from "../assets/img/icon/ave.svg";
import imgiconEco from "../assets/img/icon/hoja.svg";

class FeatureIcon extends Component {
  render() {
    const { handleClickFlora, handleClickFauna } = this.props;

    return (
      <div>
        <div className="feature-section containerEcosistema ">
          <div className="containerobjetEcosistemas">
            <div className="Text_fectureIcon_center text_fectureIcon_ecosistemas">
              <h1 style={{marginTop: "2rem"}} className="single-feature-icon__content p-color">
                Conoce nuestros  ecosistemas
              </h1>
              <p className="single-feature-icon__content p-color">
                Sumérgete en un viaje único donde la naturaleza y la
                sostenibilidad se unen  para preservar nuestro entorno
              </p>
            </div>
            <div className="car-ecositemas">
              <div className="iconos-car">
                <img src={imgFlayer} alt="Flyer" />
                <button onClick={handleClickFlora} className="a_flora">
                  Flora
                </button>
              </div>
              <div className="iconos-car car_fauna">
                <img src={imgiconEco} alt="Flyer" />
                <button
                  onClick={() => {
                    handleClickFauna();
                  }}
                  className="a_fauna"
                >
                  Fauna
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureIcon;


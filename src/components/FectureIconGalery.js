import React, { Component } from "react";
import imgFlayer from "../assets/img/icon/IconGaleryEcosistemas.svg";
import imgiconEco from "../assets/img/icon/IconGaleryProyectos.svg";
import { Link } from "react-router-dom";

class FeatureIcongalery extends Component {
  render() {
    return (
      <div>
        <div className="feature-section containerEcosistema container-gallery  ">
          <div className="containerobjetEcosistemas">
            <div>
              <h1 className="single-feature-icon__content p-color">
                Conoce nuestra Galería
              </h1>
              <p className="single-feature-icon__content p-color">
                Explora la diversidad de flora y fauna, y conoce nuestros <br />
                esfuerzos en el arboretum y los viveros. ¡Inspírate con la{" "}
                <br />
                naturaleza y la preservación ambiental.
              </p>
            </div>
            <div className="car-ecositemas">
              <div className="iconos-car">
                <img src={imgiconEco} alt="Flyer" />
                <Link to={"/eco_galery"}>
                  <button
                    onClick={() => window.scrollTo(0, 0)}
                    className="a_GaleryEco"
                  >
                    Ecosistemas
                  </button>
                </Link>
              </div>
              <div className="iconos-car">
                <img src={imgFlayer} alt="Flyer" />
                <Link to={"/pro-galery"}>
                  <button
                    onClick={() => window.scrollTo(0, 0)}
                    className="a_GaleryProyect"
                  >
                    Proyectos
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureIcongalery;

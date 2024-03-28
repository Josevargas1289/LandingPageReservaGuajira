import React, { Component } from "react";

import imagen from "../assets/img/imgBig/imageArbol.jpg";
import Modal2 from "./modal/Modal2";

class Funfact extends Component {
  state = {
    didViewCountUp: false,
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    return (
      <div>
        {/*====================  fun fact area ====================*/}
        <div
          className="funfact-section section-space--inner--100 "
          style={{ backgroundImage: `url(${imagen})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="fun-fact-wrapper"></div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of fun fact area  ====================*/}
        <div className="fun-fact-container">
          <h1 className="fun-fact-title">Conoce sobre nuestro proyecto</h1>
          <p className="single-feature-icon__content fun-fact-p">
            Sumérgete en un viaje único donde la naturaleza y la sostenibilidad{" "}
            <br />
            se unen para preservar nuestro entorno.
          </p>
          <div className="modal-container">
            <Modal2 className="modal-container" />
          </div>
        </div>
      </div>
    );
  }
}

export default Funfact;

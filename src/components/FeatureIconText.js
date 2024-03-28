import React, { Component } from "react";
import ico4 from "../assets/img/icon/ico4.svg";
import ico7 from "../assets/img/icon/ico7.svg";
import ico2 from "../assets/img/icon/ico2.svg";
import layer1 from "../assets/img/icon/layer1.svg";

class FeatureIconText extends Component {
  render() {
    let data = [
      {
        featureIcon: ico4,
        featureTitle: "Diversidad",
        featureDescription:
          "Desde bosques tropicales secos hasta pastizales, descubre una amplia gama de flora y fauna.",
      },
      {
        featureIcon: layer1,
        featureTitle: "Especies en peligro",
        featureDescription:
          "Observa especies amenazadas  y aprende sobre la importancia de su conservación.",
      },
      {
        featureIcon: ico7,
        featureTitle: "Ecoturismo",
        featureDescription:
          "Participa en actividades como avistamiento de aves, senderismo y fotografía de naturaleza, ",
      },
      {
        featureIcon: ico2,
        featureTitle: "Arboretum",
        featureDescription:
          "Sumérgete en una colección única de árboles nativos y descubre su gran importancia.",
      },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div className="col-lg-3 col-md-6" key={i}>
          <div className="single-feature-icon">
            <div className="single-feature-icon__image">
              <img src={val.featureIcon} className="img-fluid" alt="" />
            </div>
            <h3 className="single-feature-icon__title">{val.featureTitle}</h3>
            <p className="single-feature-icon__content">
              {val.featureDescription}
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/*====================  feature icon area ====================*/}
        <div className="feature-icon-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="feature-icon-wrapper">
                  <div className="row">{Datalist}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of feature icon area  ====================*/}
      </div>
    );
  }
}

export default FeatureIconText;

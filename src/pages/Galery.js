import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import backgroundImage from "../assets/img/imgBig/Img_galery_slider.jpg";
import AboutProyect from "../components/AbaoutProyect";

class Galery extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      showFlora: true, // Mostrar FloraComponent por defecto
      showFauna: false,
    };
  }

  render() {
    return (
      <div>
        <NavBar />

        {/* breadcrumb */}
        <div
          className="breadcrumb-area breadcrumb-bg "
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Galería</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>Galería</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end breadcrumb */}

        <div className="page-wrapper   ">
          {/* About section */}
          <div className="about-section ">
            <AboutProyect />
          </div>
          {/* end about section */}

          {/* Feature Icon */}
          <FeatureIcon />

          {/* Renderizar FloraComponent o FaunaComponent según el estado */}
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Galery;

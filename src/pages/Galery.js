import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import backgroundImage from "../assets/img/imgBig/Img_galery_slider.jpg";
import GalerySectionOne from "../components/GalerySectionOne";
import FeatureIcongalery from "../components/FectureIconGalery";

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
            <GalerySectionOne />
          </div>
          {/* end about section */}

          {/* Feature Icon */}
          <FeatureIcongalery />

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

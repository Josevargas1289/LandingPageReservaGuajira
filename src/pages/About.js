import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
// import Funfact from "../components/Funfact";
// import TeamMemberGrid from "../components/TeamMemberGrid";
// import TestimonialSlider from "../components/TestimonialSlider";
// import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import backgroundImage from "../assets/img/imgBig/imgEcosistemas.jpeg";
import AboutProyect from "../components/AbaoutProyect";
import FloraComponent from "../components/FloraComponent";
import FaunaComponent from "../components/FaunaComponent ";

class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      showFlora: true, // Mostrar FloraComponent por defecto
      showFauna: false,
    };
  }

  handleClickFlora = () => {
    this.setState({ showFlora: true, showFauna: false });
  };

  handleClickFauna = () => {
    this.setState({ showFauna: true, showFlora: false });
  };

  render() {
    const { showFlora, showFauna } = this.state;

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
                  <h1>Ecosistemas</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>Ecosistemas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end breadcrumb */}

        <div className="page-wrapper section-space--inner--bottom--120  ">
          {/* About section */}
          <div className="about-section ">
            <AboutProyect />
          </div>
          {/* end about section */}

          {/* Feature Icon */}
          <FeatureIcon
            background="grey-bg"
            handleClickFlora={this.handleClickFlora}
            handleClickFauna={this.handleClickFauna}
          />

          {/* Renderizar FloraComponent o FaunaComponent según el estado */}
          {showFlora && <FloraComponent />}
          {showFauna && <FaunaComponent />}

          {/* Resto del contenido */}
          {/* <Funfact /> */}
          {/* <TeamMemberGrid />
          <TestimonialSlider />
          <BrandLogoSlider background="" />  */}
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default About;

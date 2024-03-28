import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ProjectComponentOne from "../components/ProjectoComponenteOne";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import backgroundImage from "../assets/img/imgBig/bannerProyectos.jpg";
import FeatureIconProject from "../components/feactureIconProject";
import ArboretumComponent from "../components/ArboretumComponent";
import ArbolesComponent from "../components/ArbolesComponent";
import ViverosComponent from "../components/ViverosComponent";

class Services extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      showArboretum: true, // Mostrar FloraComponent por defecto
      showArboles: false,
      showViveros: false,
    };
  }

  handleClickarboretum = () => {
    this.setState({
      showArboretum: true,
      showArboles: false,
      showViveros: false,
    });
  };

  handleClickArboles = () => {
    this.setState({
      showArboles: true,
      showArboretum: false,
      showViveros: false,
    });
  };
  handleClickViveros = () => {
    this.setState({
      showViveros: true,
      showArboretum: false,
      showArboles: false,
    });
  };

  render() {
    const { showArboretum, showArboles, showViveros } = this.state;

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
                  <h1>Proyectos</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>Proyectos</li>
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
            <ProjectComponentOne />
          </div>
          {/* end about section */}

          {/* Feature Icon */}
          <FeatureIconProject
            background="grey-bg"
            handleClickarboretum={this.handleClickarboretum}
            handleClickArboles={this.handleClickArboles}
            handleClickViveros={this.handleClickViveros}
          />

          {/* Renderizar FloraComponent o FaunaComponent según el estado */}
          {showArboretum && <ArboretumComponent />}
          {showArboles && <ArbolesComponent />}
          {showViveros && <ViverosComponent />}

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

export default Services;

import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import backgroundImage from "../assets/img/imgBig/galeryProyectos.jpg";
import ArboretumGalleryLeft from "../components/ArboretumGalleryLeft ";
import SidebarArboretum from "../components/SidebarArboretum";
import ViverosGalleryLeft from "../components/ViverosGalleryLeft ";
import SidebarViveros from "../components/SidebarViveros";

class GaleryProjects extends Component {
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
    // const { showArboretum, showArboles, showViveros } = this.state;

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
                  <h1>Galería de proyectos</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>Galerías</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end breadcrumb */}
        <div className="page-wrapper section-space--inner--120">
          {/*Service section start*/}
          <div className="service-section  ">
            <div className="container container_galery">
              <div className="row">
                <div className="col-lg-8 col-12 order-4 order-lg-1">
                  <div className="service-details">
                    {/* service gallery */}
                    <ArboretumGalleryLeft />
                  </div>
                </div>
                <div className="col-lg-4 col-12 order-3 order-lg-3">
                  <SidebarArboretum />
                </div>
              </div>
            </div>
            <div className="container container_galery">
              <div className="row">
                <div className="col-lg-8 col-12 order-4 order-lg-1">
                  <div className="service-details">
                    {/* service gallery */}
                    <ViverosGalleryLeft />
                  </div>
                </div>
                <div className="col-lg-4 col-12 order-3 order-lg-3">
                  <SidebarViveros />
                </div>
              </div>
            </div>
          </div>
          {/*Service section end*/}
        </div>

        <div className="page-wrapper section-space--inner--bottom--120  ">
          {/* About section */}
          <div className="about-section ">{/* <ProjectComponentOne /> */}</div>
          {/* end about section */}
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default GaleryProjects;

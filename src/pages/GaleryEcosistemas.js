import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import backgroundImage from "../assets/img/imgBig/galeryEcosistemas.jpg";
import FaunaGalleryLeft from "../components/FaunaGalleryLeft";
import SidebarFauna from "../components/SidebarFauna";
import FloraGalleryLeft from "../components/FloraGalleryLeft";
import SidebarFlora from "../components/SidebarFlora";

class GaleryEcosistemas extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  render() {
    // const { showArboretum, showArboles, showViveros } = this.state;

    return (
      <div className="">
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
                  <h1>Galería de ecosistemas</h1>
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
                    <FaunaGalleryLeft />
                  </div>
                </div>
                <div className="col-lg-4 col-12 order-3 order-lg-3">
                  <SidebarFauna />
                </div>
              </div>
            </div>
            <br />
            <br />

            <div className="container container_galery">
              <div className="row">
                <div className="col-lg-8 col-12 order-4 order-lg-1">
                  <div className="service-details">
                    {/* service gallery */}
                    <FloraGalleryLeft />
                  </div>
                </div>
                <div className="col-lg-4 col-12 order-3 order-lg-3">
                  <SidebarFlora />
                </div>
              </div>
            </div>
          </div>
          {/*Service section end*/}
        </div>
        <br />
        <br />

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default GaleryEcosistemas;

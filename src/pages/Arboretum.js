import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import backgroundImage from "../assets/img/Galery/Flora/imgflora-14.jpg";

import ArboretumTabHome from "../components/ArboretumTabHome";

class Arboretum extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div>
        <NavBar />

        {/* breadcrumb */}
        <div
          className="breadcrumb-area breadcrumb-bg animate__animated animate__fadeInDown "
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Arboretum</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>Arboretum</li>
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
            <ArboretumTabHome />
          </div>
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Arboretum;

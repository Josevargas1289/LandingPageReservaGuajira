import React, { Component } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

import "boxicons";
import logo from "../assets/img/icon/logotipo1.svg";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);

    this.mobileMenuElement = React.createRef();
  }

  activeMobileMenu = () => {
    this.mobileMenuElement.current.toggleMobileMenu();
  };

  handleScroll() {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  }

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render() {
    return (
      <div>
        {/*====================  header area ====================*/}
        <div
          className={`header-area header-sticky header-sticky--default ${
            this.state.scroll > this.state.top ? "is-sticky" : ""
          }`}
        >
          <div className="header-area__desktop header-area__desktop--default">
            {/*=======  header top bar  =======*/}

            {/*=======  End of header top bar  =======*/}
            {/*=======  header info area  =======*/}
            <div className="header-info-area">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="header-info-wrapper align-items-center">
                      {/* logo */}
                      <div className="logo">
                        <Link to={`${process.env.PUBLIC_URL}/`}>
                          <img
                            style={{ width: "300px" }}
                            src={logo}
                            className="img-fluid"
                            alt="Logo"
                            onClick={() => window.scrollTo(0, 0)}
                          />
                        </Link>
                      </div>
                      {/* header contact info */}
                      <div className="header-contact-info">
                        <a
                          href="https://www.facebook.com/reservanaturalpd"
                          target="_blanck"
                          className="header-info-single-item"
                        >
                          <box-icon
                            type="logo"
                            color="#274955"
                            name="facebook"
                            animation="tada-hover"
                            size="md"
                          ></box-icon>
                        </a>

                        <a
                          href="https://www.instagram.com/reservanaturalpd"
                          target="_blanck"
                          className="header-info-single-item"
                        >
                          <box-icon
                            name="instagram"
                            type="logo"
                            color="#FF9203"
                            animation="tada-hover"
                            size="md"
                          ></box-icon>
                        </a>
                        <a
                          href="https://www.tiktok.com/@reservanaturalpd"
                          target="_blanck"
                          className="header-info-single-item"
                        >
                          <box-icon
                            type="logo"
                            name="tiktok"
                            color="#6FB530"
                            animation="tada-hover"
                            size="md"
                          ></box-icon>
                        </a>
                      </div>
                      {/* mobile menu */}
                      <div
                        className="mobile-navigation-icon"
                        id="mobile-menu-trigger"
                        onClick={this.activeMobileMenu}
                      >
                        <i />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=======  End of header info area =======*/}
            {/*=======  header navigation area  =======*/}
            <div className="header-navigation-area default-bg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/* header navigation */}
                    <div className="header-navigation header-navigation--header-default position-relative">
                      <div className="header-navigation__nav position-static">
                        <nav>
                          <ul>
                            <li>
                              <Link
                                to={`${process.env.PUBLIC_URL}/`}
                                onClick={() => window.scrollTo(0, 0)}
                              >
                                INICIO
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={`${process.env.PUBLIC_URL}/ecosistemas`}
                                onClick={() => window.scrollTo(0, 0)}
                              >
                                ECOSISTEMAS
                              </Link>
                            </li>
                            <li className="has-children has-children--multilevel-submenu">
                              <Link
                                to={`${process.env.PUBLIC_URL}/proyectos`}
                                onClick={() => window.scrollTo(0, 0)}
                              >
                                PROYECTOS
                              </Link>
                              {/* <ul className="submenu">
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/services`}
                                  >
                                    Service Page
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}
                                  >
                                    Service Details Left Sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/service-details-right-sidebar`}
                                  >
                                    Service Details Right Sidebar
                                  </Link>
                                </li>
                              </ul> */}
                            </li>
                            <li className="has-children has-children--multilevel-submenu">
                              <Link to={`${process.env.PUBLIC_URL}/galeria`}
                              onClick={() => window.scrollTo(0, 0) }
                              >
                                GALERIA
                              </Link>
                              {/* <ul className="submenu">
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/projects`}
                                  >
                                    Project Page
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/project-details`}
                                  >
                                    Project Details
                                  </Link>
                                </li>
                              </ul> */}
                            </li>

                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/contact-us`}
                              onClick={() => window.scrollTo(0, 0) }
                              >
                                CONTACTO
                              </Link>{" "}
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=======  End of header navigation area =======*/}
          </div>
        </div>
        {/*====================  End of header area  ====================*/}

        {/* Mobile Menu */}
        <MobileMenu ref={this.mobileMenuElement} />
      </div>
    );
  }
}

export default NavBar;

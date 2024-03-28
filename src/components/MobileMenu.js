import React, { Component } from "react";
import { Link } from "react-router-dom";
import "boxicons";

class MobileMenu extends Component {
  state = {
    active: false,
  };

  toggleMobileMenu = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  componentDidMount() {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
  }

  render() {
    return (
      <div>
        {/*=======  offcanvas mobile menu  =======*/}
        <div
          className={`offcanvas-mobile-menu ${
            this.state.active ? "active" : ""
          } `}
          id="mobile-menu-overlay"
        >
          <a
            href="#/"
            className="offcanvas-menu-close"
            id="mobile-menu-close-trigger"
            onClick={this.toggleMobileMenu}
          >
            <i className="ion-android-close" />
          </a>
          <div className="offcanvas-wrapper">
            <div className="offcanvas-inner-content">
              <nav className="offcanvas-navigation" id="offcanvas-navigation">
                <ul>
                  <li className="menu-item-has-children">
                    <Link to={`/`} onClick={() => window.scrollTo(0, 0)}>
                      INICIO
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to={`${process.env.PUBLIC_URL}/ecosistemas`}
                    >
                      ECOSISTEMAS
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to={`${process.env.PUBLIC_URL}/proyectos`}
                    >
                      PROYECTOS
                    </Link>
                    {/* <ul className="sub-menu">
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/services`}>
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
                  <li className="menu-item-has-children">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to={`${process.env.PUBLIC_URL}/galeria`}
                    >
                      GALERIA
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/eco_galery`}>
                          Ecosistemas
                        </Link>
                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/pro-galery`}>
                          Poyectos
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to={`${process.env.PUBLIC_URL}/contact-us`}
                    >
                      CONTACTO
                    </Link>{" "}
                  </li>
                </ul>
              </nav>
              <div className="offcanvas-widget-area">
                <div className="off-canvas-contact-widget">
                  <div className="header-contact-info">
                    <ul className="header-contact-info__list">
                      <li>
                        <i className="ion-android-phone-portrait" />{" "}
                        <a href="tel://12452456012"> 3178233433 </a>
                      </li>
                      <li>
                        <i className="ion-android-mail" />{" "}
                        <a href="mailto:info@yourdomain.com">
                          reservanaturalpd@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Off Canvas Widget Social Start*/}
                <div className="off-canvas-widget-social">
                  <a href="#/" title="Facebook">
                    <box-icon type="logo" size="sm" name="facebook"></box-icon>
                  </a>
                  <a href="#/" title="Twitter">
                    <box-icon type="logo" name="tiktok" size="sm"></box-icon>
                  </a>
                  <a href="#/" title="LinkedIn">
                    <box-icon
                      type="logo"
                      size="sm"
                      animation="tada-hover"
                      name="instagram"
                    ></box-icon>
                  </a>
                </div>
                {/*Off Canvas Widget Social End*/}
              </div>
            </div>
          </div>
        </div>
        {/*=======  End of offcanvas mobile menu  =======*/}
      </div>
    );
  }
}

export default MobileMenu;

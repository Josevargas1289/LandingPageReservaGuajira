import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import "boxicons";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  handleScroll() {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? document.getElementById("scroll-top").classList.add("show")
      : document.getElementById("scroll-top").classList.remove("show");
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render() {
    return (
      <div>
        {/*====================  footer area ====================*/}
        <div className="footer-area dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-content-wrapper section-space--inner--100">
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12">
                      {/* footer intro wrapper */}
                      <div className="footer-intro-wrapper">
                        <h4 className="footer-widget__title">Ubicación</h4>
                        <div className="footer-desc">
                          Ubicada en la vereda San Rafael, a 40 minutos del
                          municipio de Montería, en un terreno propiedad de
                          Alfredo Manuel Pérez Rivero. Sus coordenadas
                          geográficas son N08°41'32,04” y W 76°8'0.
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">Ecosistema</h4>
                        <ul className="footer-widget__navigation">
                          <li>
                            <div className="footer-desc">
                              Bosques Tropicales Secos y Húmedos
                            </div>
                          </li>
                          <br />
                          <li>
                            <div className="footer-desc">Pastizales</div>
                          </li>
                          <br />
                          <li>
                            <div className="footer-desc">
                              Fauna (  Avifauna, herpetofauna, mamíferos)
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">Proyectos</h4>
                        <ul className="footer-widget__navigation">
                          <li>
                          <div className="footer-desc">
                              Arboretum
                            </div>
                          </li>
                          <br />
                          <li>
                            <div className="footer-desc">
                              Establecimiento de Viveros
                            </div>
                          </li>
                          <br />
                          <li>
                            <div className="footer-desc">
                              Identificación de Árboles Plus
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget mb-0">
                        <h4 className="footer-widget__title">Contáctenos</h4>
                        <div className="footer-widget__content">
                          <div className="footer-desc">
                            Siguenos en redes sociales y por nuestra línea de
                            whatsapp 3178233433
                          </div>
                          <div className="footer_socialMedia">
                            <a
                              href="https://www.facebook.com/reservanaturalpd"
                              target="_blanck"
                            >
                              <box-icon
                                type="logo"
                                color="#97C2D1"
                                name="facebook"
                                animation="tada-hover"
                                size="sm"
                              ></box-icon>
                            </a>
                            <a
                              href="https://www.instagram.com/reservanaturalpd"
                              target="_blanck"
                            >
                              <box-icon
                                name="instagram"
                                type="logo"
                                color="#97C2D1"
                                animation="tada-hover"
                                size="sm"
                              ></box-icon>
                            </a>
                            <a
                              href="https://www.tiktok.com/@reservanaturalpd"
                              target="_blanck"
                            >
                              <box-icon
                                type="logo"
                                name="tiktok"
                                color="#97C2D1"
                                animation="tada-hover"
                                size="sm"
                              ></box-icon>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of footer area  ====================*/}
        {/*====================  scroll top ====================*/}
        <button
          className="scroll-top"
          id="scroll-top"
          onClick={this.scrollToTop}
        >
          <i className="ion-android-arrow-up" />
        </button>
        {/*====================  End of scroll top  ====================*/}
      </div>
    );
  }
}

export default Footer;

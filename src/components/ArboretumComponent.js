import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import img1Tab from "../assets/img/imgBig/img1Proyecto.jpg";
import img2Tab from "../assets/img/imgBig/img2Proyecto.jpg";
import img3Tab from "../assets/img/imgBig/img3Proyecto.jpg";
import img4Tab from "../assets/img/imgBig/img4Proyecto.jpg";
import img5Tab from "../assets/img/imgBig/img5Proyecto.jpg";



class ArboretumComponent extends Component {
  render() {
    /* service tab menu */
    let serviceTabMenuData = [
      { tabMenuName: "Diseño paisajístico" },
      { tabMenuName: "Diseño de siembra" },
      { tabMenuName: "Trazado" },
      { tabMenuName: "Ahoyado" },
      { tabMenuName: "Siembra" },
    ];

    let serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => {
      return (
        <Tab key={i}>
          {" "}
          <span className="icon"></span>{" "}
          <span className="text">{val.tabMenuName}</span>
        </Tab>
      );
    });

    /* service tab content */

    let serviceTabContentData = [
      {
        bgUrl: img1Tab,
        contentTitle: "Diseño paisajístico",
        contentDesc:
          "Se realizó un diseño paisajístico mediante recorridos para preseleccionar el área donde se intersectan las coberturas vegetales, creando un corredor ecológico entre pastos enmalezados y vegetación secundaria alta.",
      },
      {
        bgUrl: img2Tab,
        contentTitle: "Diseño de siembra",
        contentDesc:
          "El diseño de siembra estableció un área de 100x100 metros, organizando los núcleos en torno a un individuo central de Ébano (Libidibia punctata), para generar un impacto visual con contraste de color amarillo.",
      },
      {
        bgUrl: img3Tab,
        contentTitle: "Trazado",
        contentDesc:
          "Se estableció la densidad de individuos para la cobertura de pastos enmalezados, ajustando la siembra a un total de 40 individuos de especies maderables de importancia ecológica..",
      },
      {
        bgUrl: img4Tab,
        contentTitle: "Ahoyado",
        contentDesc:
          "La demarcación y ahoyado se realizó con estacas resaltadas en amarillo, obtenidas de la poda de la vegetación presente en la reserva. Se cavaron hoyos de 0.30 cm de profundidad y 0.20 de diámetro.",
      },
      {
        bgUrl: img5Tab,
        contentTitle: "Siembra",
        contentDesc:
          "Se utilizó hidrogel en cada hoyo para asegurar la retención de humedad y la supervivencia de las plantas. Se diseñó un sistema de siembra preliminar en núcleo, incluyendo especies como Ébano, Guayacán de bola, Cañaguate, Caoba, Algarrobillo y Robles. Se sembraron 40 individuos forestales de diversas especies de importancia ecológica.",
      },
    ];

    let serviceTabContentDatalist = serviceTabContentData.map((val, i) => {
      return (
        <TabPanel key={i}>
          <div
            className="service-tab__single-content-wrapper section-space--inner--120   "
            style={{
              backgroundImage: `url(${val.bgUrl})`,
            }}
          >
            <div className="service-tab__single-content">
              <h3 className="service-tab__title">{val.contentTitle}</h3>
              <p className="service-tab__text">{val.contentDesc}</p>
              <div>{val.serviceLink}</div>
            </div>
          </div>
        </TabPanel>
      );
    });

    return (
      <div>
        {/*====================  service tab area ====================*/}
        <div className="service-tab-area section-space--inner--120 animate__animated animate__fadeInDown">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">{/* section title */}</div>
              <div className="col-lg-12">
                {/* service tab wrapper */}

                <div className="service-tab-wrapper">
                  <Tabs>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <TabList>
                          <div className="service-tab__link-wrapper">
                            {serviceTabMenuDatalist}
                          </div>
                        </TabList>
                      </div>

                      <div className="col-md-8">
                        {serviceTabContentDatalist}
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h3>Arboretum</h3>
          <br />
          <br />
          <br />

          <p className="single-feature-icon__content">
            Ante la pérdida de bosques en la vereda San Rafael, municipio de
            Montería, debido a la deforestación provocada principalmente por
            actividades ganaderas, SOLARPACK COLOMBIA S.A.S E.S.P (SPK) propone
            la creación de un arboretum en la reserva natural "El Paraíso de los
            Deseos". El objetivo es fomentar valores ecológicos y conciencia
            ambiental entre las personas vinculadas a la reserva, con miras a
            conservar la vida silvestre y los ecosistemas. Este arboretum
            proporcionará diversos beneficios ecológicos. Los árboles plantados
            servirán como fuente de semillas para la regeneración natural o
            asistida de los bosques, protegiendo el suelo y manteniendo su
            fertilidad. Además, ayudarán a moderar el clima, creando microclimas
            estables y propicios para el crecimiento de las plantas, así como a
            regular el ciclo del agua al aumentar la humedad y facilitar la
            penetración del agua en el suelo. También contribuirán a favorecer
            la supervivencia y biodiversidad de otros organismos en el
            ecosistema.
          </p>
        </div>

        {/*====================  End of service tab area  ====================*/}
      </div>
    );
  }
}

export default ArboretumComponent;

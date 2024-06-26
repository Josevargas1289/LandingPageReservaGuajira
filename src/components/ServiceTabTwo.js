import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import arboretumImgTabHome from "../assets/img/imgBig/arboretumtabhome.jpg";
import arbolesImgTabHome from "../assets/img/imgBig/arbolesplustabhome.jpg";
import viverosimgTabHome from "../assets/img/imgBig/viverotabhome.jpg";

class ServiceTabTwo extends Component {
  render() {
    /* service tab menu */
    let serviceTabMenuData = [
      { tabMenuName: "Arboretum" },
      {
        tabMenuName: "Arboles Plus",
      },
      { tabMenuName: "Viveros" },
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
        bgUrl: arboretumImgTabHome,
        contentTitle: "Arboretum",
        contentDesc:
          "Nuestro arboretum  no solo será fuente de semillas para regenerar los bosques, sino que también ayudará a moderar el clima y regular el ciclo del agua.",
        serviceLink: "arboretum",
      },
      {
        bgUrl: arbolesImgTabHome,
        contentTitle: "Arboles Plus",
        contentDesc:
          "La selección y protección de ejemplares excepcionales es clave en nuestro proyecto de conservación. Nos enorgullece informarte que hemos identificado siete árboles plus, contribuyendo así a la preservación de especies vitales para nuestros ecosistemas.",
        serviceLink: "arboles_plus",
      },
      {
        bgUrl: viverosimgTabHome,
        contentTitle: "Viveros",
        contentDesc:
          "Buscamos conservar la biodiversidad y promover la producción sostenible de especies vegetales clave. Nuestro vivero, ubicado cerca de la represa, garantiza un cuidado óptimo para las plantas en proceso de germinación",
        serviceLink: "viveros",
      },
    ];

    let serviceTabContentDatalist = serviceTabContentData.map((val, i) => {
      return (
        <TabPanel key={i}>
          <div
            className="service-tab__single-content-wrapper"
            style={{
              backgroundImage: `url(${val.bgUrl})`,
            }}
          >
            <div className="service-tab__single-content">
              <h3 className="service-tab__title">{val.contentTitle}</h3>
              <p className="service-tab__text">{val.contentDesc}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.serviceLink}`}
                className="see-more-link"
              >
                VER MÁS
              </a>
            </div>
          </div>
        </TabPanel>
      );
    });

    return (
      <div>
        {/*====================  service tab area ====================*/}
        <div className="service-tab-area section-space--inner--120">
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
        {/*====================  End of service tab area  ====================*/}
      </div>
    );
  }
}

export default ServiceTabTwo;

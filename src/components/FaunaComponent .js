import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import imgBannerFauna from "../assets/img/imgBig/imgBannerFauna.jpg";
import imgAvesTab from "../assets/img/imgBig/imgAvesTab.jpg";
import imgAnfibiosTab from "../assets/img/imgBig/imgAnfibiosfauna.jpg";
import imgReptilesTab from "../assets/img/imgBig/imgReptilesFauna.jpg";
import Modal7 from "./modal/Modal7";
import Modal8 from "./modal/Modal8";
import Modal9 from "./modal/Modal9";

class FaunaComponent extends Component {
  render() {
    /* service tab menu */
    let serviceTabMenuData = [
      { tabMenuName: "Aves" },
      {
        tabMenuName: "Anfibios",
      },
      { tabMenuName: "Reptiles" },
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
        bgUrl: imgAvesTab,
        contentTitle: "Aves",
        contentDesc:
          "Se realizaron recorridos de 1.5 km de longitud en áreas boscosas, pastos enmalezados y bordes de bosque. Se emplearon métodos de detección visual y auditiva, así como grabación de vocalizaciones. ",
        serviceLink: <Modal7 />,
      },
      {
        bgUrl: imgAnfibiosTab,
        contentTitle: "Anfibios",
        contentDesc:
          "Sumérgete en la fascinante diversidad de los anfibios que habitan en nuestra reserva natural.",
        serviceLink: <Modal8 />,
      },
      {
        bgUrl: imgReptilesTab,
        contentTitle: "Reptiles",
        contentDesc:
          'Descubre la fascinante diversidad de reptiles que habitan en la reserva natural "Paraíso de los Deseos".',
        serviceLink: <Modal9 />,
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
              <div>{val.serviceLink}</div>
            </div>
          </div>
        </TabPanel>
      );
    });

    return (
      <div className="prueba">
        {/*====================  service tab area ====================*/}
        <div className="service-tab-area ">
          <div className="container-Tab-Flora">
            <img
              className="img_banner animate__animated animate__fadeInUp"
              src={imgBannerFauna}
              alt=""
            />
          </div>
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
                          <div className="service-tab2__link-wrapper">
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

export default FaunaComponent;

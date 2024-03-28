import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal3 from "./modal/Modal3";
import Modal4 from "./modal/Modal4";
import Modal5 from "./modal/Modal5";
import imgBannerFlora from "../assets/img/imgBig/imgBanner_Flora.jpg"
import imagenVsecundaria from "../assets/img/imgBig/imageArbol.jpg";
import imagenVbaja from "../assets/img/imgBig/vegetacionBaja.jpg";
import imgpastosEnmalezados from "../assets/img/imgBig/pastosEnmalezados.jpg";

class FloraComponent extends Component {
  render() {
    /* service tab menu */
    let serviceTabMenuData = [
      { tabMenuName: "Vegetación secundaria alta" },
      {
        tabMenuName: "Vegetación secundaria baja",
      },
      { tabMenuName: "Pastos Enmalezados" },
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
        bgUrl: imagenVsecundaria,
        contentTitle: "Vegetación secundaria alta",
        contentDesc:
          "La vegetación secundaria alta es una etapa de sucesión vegetal que sigue a la deforestación o reforestación de praderas...",
        serviceLink: <Modal3 />,
      },
      {
        bgUrl: imagenVbaja,
        contentTitle: "Vegetación secundaria baja",
        contentDesc:
          "La vegetación secundaria baja es la etapa inicial después de la deforestación o conversión de pastizales en bosques...",
        serviceLink: <Modal4 />,
      },
      {
        bgUrl: imgpastosEnmalezados,
        contentTitle: "Pastos Enmalezados",
        contentDesc:
          "Los pastos enmalezados se refieren a áreas cubiertas principalmente por pastos y malezas...",
        serviceLink: <Modal5 />,
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
        <div className="service-tab-area">
          <div className="container-Tab-Flora ">
            <img
              className="img_banner animate__animated animate__fadeInUp"
              src={imgBannerFlora}
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

export default FloraComponent;

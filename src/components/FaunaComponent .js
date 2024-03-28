import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import imgBannerFauna from "../assets/img/imgBig/imgBannerFauna.jpg";
import imgAvesTab from "../assets/img/imgBig/imgAvesTab.jpg";
import imgAnfibiosTab from "../assets/img/imgBig/imgAnfibiosfauna.jpg";
import imgReptilesTab from "../assets/img/imgBig/imgReptilesFauna.jpg";

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
          "Lorem ipsum dolor sit amet, consectet adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        serviceLink: "service-details-left-sidebar",
      },
      {
        bgUrl: imgAnfibiosTab,
        contentTitle: "Anfibios",
        contentDesc:
          "Lorem ipsum dolor sit amet, consectet adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        serviceLink: "service-details-left-sidebar",
      },
      {
        bgUrl: imgReptilesTab,
        contentTitle: "Reptiles",
        contentDesc:
          "Lorem ipsum dolor sit amet, consectet adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        serviceLink: "service-details-left-sidebar",
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
                SEE MORE
              </a>
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

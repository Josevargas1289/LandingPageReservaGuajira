import React, { Component } from "react";
import SwiperSlider, { SwiperSlide } from "./swiper";

class FloraGalleryLeft extends Component {
  render() {
    /* service image gallery slider params*/

    const params = {
      slidesPerView: 1,
      loop: true,
      navigation: true,
    };

    /* service image gallery data */

    let imageGalleryData = [
      { img: "service-details-1.jpg" },
      { img: "service-details-2.jpg" },
      { img: "service-details-3.jpg" },
      { img: "service-details-4.jpg" },
      { img: "service-details-5.jpg" },
      { img: "service-details-6.jpg" },
    ];

    /* service image gallery component */

    let ImageGalleryDataList = imageGalleryData.map((val, i) => {
      return (
        <SwiperSlide className="service-gallery__single-slide " key={i}>
          <div className="item section-space--inner--bottom--120">
            <img
              src={`assets/img/service/${val.img}`}
              className="img-fluid"
              alt="gallery data"
            />
          </div>
        </SwiperSlide>
      );
    });

    return (
      <div className="section-space--inner--bottom--120">
        <div className="service-gallery section-space--inner--bottom--120">
          <SwiperSlider options={params}>{ImageGalleryDataList}</SwiperSlider>
        </div>
      </div>
    );
  }
}

export default FloraGalleryLeft;

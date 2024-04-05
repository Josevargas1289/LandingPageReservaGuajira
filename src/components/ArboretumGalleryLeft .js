

import React, { Component } from "react";
import SwiperSlider, { SwiperSlide } from "./swiper";
import imageData from "../assets/img/Galery/Flora/ImgDataFlora"; // Importa el archivo imageData

class FloraGalleryLeft extends Component {
  render() {
    /* service image gallery slider params*/
    const params = {
      slidesPerView: 1,
      loop: true,
      navigation: true,
    
    };

    /* service image gallery component */
    let ImageGalleryDataList = imageData.map((val) => {
      return (
        <SwiperSlide className="service-gallery__single-slide" key={val.id}>
          <div className="item section-space--inner--bottom--120">
            {/* Utiliza la ruta de la imagen desde el objeto */}
            <img
              style={{ width: "770px" }}
              src={val.src} // Utiliza la ruta de la imagen desde el objeto
              className="img-fluid"
              alt={val.name} // Utiliza el nombre de la imagen como alt
              loading="lazy"
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

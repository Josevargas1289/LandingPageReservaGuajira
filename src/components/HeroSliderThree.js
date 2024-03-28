import React, { Component } from "react";
import SwiperSlider, { SwiperSlide } from "./swiper";
import { EffectFade } from "swiper";
import slider5 from "../assets/img/slider/slider5.jpg";

class HeroSliderThree extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      navigation: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      modules: [EffectFade],
    };

    let data = [
      {
        bgImg: slider5,
        sliderTitle: "Conservando sueños, protegiendo vidas",
      },
    ];

    let DataList = data.map((val, i) => {
      return (
        <SwiperSlide key={i}>
          <div
            className="hero-slider__single-item"
            style={{ backgroundImage: `url(${val.bgImg})` }}
          >
            <div className="hero-slider__content-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero-slider__content m-auto text-center">
                      <h2
                        style={{ color: "white" }}
                        className="hero-slider__subtitle"
                      >
                        {val.sliderTitle}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <div>
        {/*====================  hero slider area ====================*/}
        <div className="hero-alider-area">
          <SwiperSlider options={params}>{DataList}</SwiperSlider>
        </div>
        {/*====================  End of hero slider area  ====================*/}
      </div>
    );
  }
}

export default HeroSliderThree;

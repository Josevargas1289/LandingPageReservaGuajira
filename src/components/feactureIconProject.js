import React, { useState } from "react";
import iconarboretum from "../assets/img/icon/arboretumiconProyect.svg";
import arbolesVivosIcon from "../assets/img/icon/arbolesviconproject.svg";
import viverosIcon from "../assets/img/icon/viverosiconproject.svg";
import iconChangearboretum from "../assets/img/icon/ImgChangeArboretum.svg";
import arbolesVivosIconChange from "../assets/img/icon/ImgChangeArbolesPlus.svg";
import viverosIconChange from "../assets/img/icon/ImgChangeViveros.svg";

const FeatureIconProject = (props) => {
  const [img1, setImg1] = useState(iconChangearboretum);
  const [img2, setImg2] = useState(arbolesVivosIcon);
  const [img3, setImg3] = useState(viverosIcon);

  const handleClickArboles = () => {
    setImg2(arbolesVivosIconChange);
    setImg3(viverosIcon);
    setImg1(iconarboretum);
    props.handleClickArboles();
  };

  const handleClickViveros = () => {
    setImg3(viverosIconChange);
    setImg2(arbolesVivosIcon);
    setImg1(iconarboretum);
    props.handleClickViveros();
  };

  const handleClickArboretum = () => {
    setImg1(iconChangearboretum);
    setImg2(arbolesVivosIcon);
    setImg3(viverosIcon);
    props.handleClickarboretum();
  };

  return (
    <div>
      <div className="feature-section containerIconProyect">
        <div className="containerobjetEcosistemas">
          <div className="Text_fectureIcon_center text_fectureIcon">
            <h1
            style={{ marginTop: "1rem"}}
            className="single-feature-icon__content p-color">
              Conoce nuestros <br /> proyectos
            </h1>
            <p className="single-feature-icon__content p-color ">
              Descubre nuestros proyectos de conservación  y siembra.
              Únete a nosotros mientras trabajamos para  preservar la
              biodiversidad, proteger hábitats  amenazados y sembrar
              esperanza para un futuro  sostenible.
            </p>
            
          </div>
          <div className="car-ecositemas">
            <div className="iconos-car">
              <img src={img1} alt="Flyer" />
              <button onClick={handleClickArboretum} className="arboretum_styled">
                Arboretum
              </button>
            </div>
            <div className="iconos-car car_fauna">
              <img src={img2} alt="Flyer" />
              <button onClick={handleClickArboles} className="arbolesVivos_styled">
                Arboles Plus
              </button>
            </div>
            <div className="iconos-car car_fauna">
              <img src={img3} alt="Flyer" />
              <button onClick={handleClickViveros} className="viveros_styled">
                Viveros
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureIconProject;

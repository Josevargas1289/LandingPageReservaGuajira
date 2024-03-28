import React from "react";
import imgArbol from "../assets/img/imgBig/arboretum1.png";

const ImagenDiv = () => {
  return (
    <div
      style={{ height: "400px", width: "100vw", backgroundColor: "#f0f0f0" }}
    >
      <img
        src={imgArbol}
        alt=""
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          margin: "300",
        }}
      />
    </div>
  );
};

export default ImagenDiv;

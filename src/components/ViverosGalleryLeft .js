import ImageGallery from "react-image-gallery";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import images from "../assets/img/Galery/Viveros/ImaganesGaleryViverosData";

const ArboretumGalleryLeft = () => {
  return (
    <div>
      <ImageGallery 
      showPlayButton = {false}
      items={images} />
    </div>
  );
};

export default ArboretumGalleryLeft;

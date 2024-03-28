import React, { Component } from "react";
import NavBar from "../components/NavBar";
import HeroSliderThree from "../components/HeroSliderThree";
import FeatureIconText from "../components/FeatureIconText";
import AboutText from "../components/AboutText";
import ServiceTabTwo from "../components/ServiceTabTwo";
// import TestimonialSlider from "../components/TestimonialSlider";
// import ProjectImageGallery from "../components/ProjectImageGallery";
// import BlogGridTwo from "../components/BlogGridTwo";
// import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
// import AboutProyect from "../components/AbaoutProyect";
import Funfact from "../components/Funfact";

class HomeThree extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />
        {/* Hero slider */}
        <HeroSliderThree />
        {/* Feature icon text */}
        <FeatureIconText />
        {/* About text */}
        <AboutText />
        {/* About proyect */}
        <Funfact />
        {/* <AboutProyect /> */}
        {/* Image full */}
        <ServiceTabTwo />
        {/* Testimonial Slider */}
        {/* <TestimonialSlider /> */}
        {/* Project image gallery */}
        {/* <ProjectImageGallery /> */}
        {/* Brand logo */}
        {/* <BrandLogoSlider background="grey-bg" /> */}
        {/* Blog grid */}
        {/* <BlogGridTwo /> */}
        {/* Footer */}
        <Footer />
        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default HomeThree;

import React, { useEffect } from "react";
import Slider from "react-slick";
import Slideitem from "./slideitem";
import "./slider.css";
const NextSlide = (props) => {
  const { onClick } = props;
  return (
    <span class="header-slide-btn header-slide-left" onClick={onClick}>
      <i class="fas fa-chevron-left"></i>
    </span>
  );
};
const PrevSlide = (props) => {
  const { onClick } = props;
  return (
    <span class="header-slide-btn header-slide-right" onClick={onClick}>
      <i class="fas fa-chevron-right"></i>
    </span>
  );
};
const Slide = (props) => {
  const { setting } = props;
  var listImage = [
    "http://localhost:8080/image/product/quoctethieunhi_1.3_1920.jpg",
    "http://localhost:8080/image/product/Trang_Thi_u_nhi_1.1_1920x700.jpg",
  ];
  function renderSlide() {
    var result = [];
    for (var i = 0; i < listImage.length; i++) {
      result.push(<Slideitem urlImage={listImage[i]} key={i}></Slideitem>);
    }
    return result;
  }
  var settings = {
    infinite: true,
    speed: 500,
    ...setting,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <PrevSlide />,
    prevArrow: <NextSlide />,
  };
  return <Slider {...settings}>{renderSlide()}</Slider>;
};

Slide.propTypes = {};

export default Slide;

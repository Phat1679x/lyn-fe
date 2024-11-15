import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function CustomArrows(dots = false, auto = false) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container p-2">
      <h2>test</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
          <div>
            <label htmlFor="">use React slick</label>
          </div>
        </div>
        <div>
          <h3>2</h3>
          <div>
            <label htmlFor="">use React slick</label>
          </div>
        </div>
        <div>
          <h3>3</h3>
          <div>
            <label htmlFor="">use React slick</label>
          </div>
        </div>
        <div>
          <h3>4</h3>
          <div>
            <label htmlFor="">use React slick</label>
          </div>
        </div>
        <div>
          <h3>5</h3>
          <div>
            <label htmlFor="">use React slick</label>
          </div>
        </div>
        <div>
          <h3>6</h3>
          <div>
            <label htmlFor="">use React slick</label>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CustomArrows;

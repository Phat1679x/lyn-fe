import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/style.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow flex-row-reverse z-30 relative`}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        background: "transparent",
        borderRadius: "50%",
        color: "black",
        cursor: "pointer",
        boxShadow: "0 0 5px black ",
        top: "50%",
        fontSize: "40px",
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleRight} className="absolute" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow flex-row z-30 relative`}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        background: "transparent",
        borderRadius: "50%",
        color: "black",
        cursor: "pointer",
        boxShadow: "0 0 5px black ",
        top: "50%",
        fontSize: "40px",
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleLeft} className="absolute" />
    </div>
  );
}

function CustomSlick({ arrows = false, fade = false, data = [] }) {
  var settings = {
    fade: fade,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,

    arrows: arrows,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center cursor-grab"
          >
            <span>{item.span}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomSlick;

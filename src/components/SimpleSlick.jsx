import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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

function SimpleSlick({
  dots = false,
  auto = false,
  arrows = false,
  fade = false,
  data = [],
  arrowsCss,
}) {
  const settings = {
    dots: dots,
    infinite: true,
    fade: fade,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: auto,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: arrows,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container px-4">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="flex items-center justify-center">
            <span>{item.span}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlick;

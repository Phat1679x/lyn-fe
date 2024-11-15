import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function WarningSlick({
  dots = false,
  auto = false,
  arrows = false,
  fade = false,
  data = [],
  speed = 500,
  show = 4,
  scroll = 1,
  pause = false,
  cssEase,
}) {
  var settings = {
    dots: dots,
    infinite: true,
    fade: fade,
    speed: speed,
    slidesToShow: show,
    slidesToScroll: scroll,
    initialSlide: 0,
    autoplay: auto,
    autoplaySpeed: 2000,
    pauseOnHover: pause,
    cssEase: cssEase,
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
        },
      },
    ],
  };

  return (
    <div className="slider-container">
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

export default WarningSlick;

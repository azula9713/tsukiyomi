import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, SliderBanner } from "./ImageSliderStyle";
import sliderData from "../../App/Data/SliderData";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      {sliderData.map((item) => (
        <SliderBanner key={item.id}>
          <a>
            <img src={item.banner} alt={item.title} />
          </a>
        </SliderBanner>
      ))}
    </Carousel>
  );
};

export default ImageSlider;

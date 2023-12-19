import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const Amenities = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="flexDivAmenities startTextAlign">
          <img
            src={image.url}
            alt={`Slide ${index}`}
            className={image.classList}
          />
          {image.text}
        </div>
      ))}
    </Slider>
  );
};

export default Amenities;

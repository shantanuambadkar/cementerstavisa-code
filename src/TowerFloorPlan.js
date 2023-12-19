import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const TowerFloorPlan = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="floorPlan-div">
          <img src={image.url} alt={image.text} className="floorplan-img" />
        </div>
      ))}
    </Slider>
  );
};

export default TowerFloorPlan;
